"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const errorhandler_1 = __importDefault(require("errorhandler"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
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
    res.json({ status: true, body: 'Hi the server works..' });
});
// Use the errorhandler when not in the production environment
if (process.env.NODE_ENV !== 'production') {
    app.use(errorhandler_1.default());
}
exports.default = app;
//# sourceMappingURL=app.js.map