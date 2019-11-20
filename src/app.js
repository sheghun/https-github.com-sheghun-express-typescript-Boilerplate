"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const errorhandler_1 = __importDefault(require("errorhandler"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const path = __importStar(require("path"));
const logger_1 = __importDefault(require("./shared/logger"));
const routes_1 = __importDefault(require("./routes"));
const router = express_1.default.Router();
dotenv_1.default.config({ path: path.join(`${__dirname}/../.env`) });
const app = express_1.default();
// middleware
app.use(express_1.default.static(__dirname + '/public/'));
const corsOptions = () => {
    return {
        // origin: originCallback,
        credentials: true,
        origin: ['http://localhost:3000'],
        optionsSuccessStatus: 200,
    };
};
// Use the body parser
app.use(body_parser_1.default.json());
// Enable cookies
app.use(cookie_parser_1.default());
// Use cors
app.use(cors_1.default(corsOptions()));
app.get('/', (req, res) => {
    return res.json({ status: true, body: 'Hi the server works..' });
});
app.use('/', routes_1.default);
// Log all errors
app.use((err, req, res, next) => {
    logger_1.default.error(err);
    next(err);
});
// Use the errorhandler when not in the production environment
if (process.env.NODE_ENV !== 'production') {
    app.use(errorhandler_1.default());
}
exports.default = app;
