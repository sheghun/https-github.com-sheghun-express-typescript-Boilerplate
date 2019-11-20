import express, {Errback, NextFunction} from 'express';
import bodyParser from 'body-parser';
import errorHandler from 'errorhandler';
import cookieParser from 'cookie-parser';
import cors, {CorsOptions} from 'cors';
import dotenv from 'dotenv';
import * as path from 'path';
import logger from './shared/logger';
import baseRoutes from './routes';

const router = express.Router();

dotenv.config({path: path.join(`${__dirname}/../.env`)});

const app = express();

// middleware
app.use(express.static(__dirname + '/public/'));

const corsOptions = (): CorsOptions => {
  return {
    // origin: originCallback,
    credentials: true,
    origin: ['http://localhost:3000'],
    optionsSuccessStatus: 200,
  };
};

// Use the body parser
app.use(bodyParser.json());
// Enable cookies
app.use(cookieParser());
// Use cors
app.use(cors(corsOptions()));

app.get('/', (req, res) => {
  return res.json({status: true, body: 'Hi the server works..'});
});

app.use('/', baseRoutes);

// Log all errors
app.use((err: Errback, req, res, next: NextFunction) => {
  logger.error(err);
  next(err);
});

// Use the errorhandler when not in the production environment
if (process.env.NODE_ENV !== 'production') {
  app.use(errorHandler());
}

export default app;
