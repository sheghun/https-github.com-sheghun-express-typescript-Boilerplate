import express from 'express';
import bodyParser from 'body-parser';
import errorHandler from 'errorhandler';
import cookieParser from 'cookie-parser';
import cors, {CorsOptions} from 'cors';

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
  res.send('Thanks');
});

// Use the errorhandler when not in the production environment
if (process.env.NODE_ENV !== 'production') {
  app.use(errorHandler());
}

export default app;
