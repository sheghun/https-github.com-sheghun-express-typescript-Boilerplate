"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
const chalk_1 = __importDefault(require("chalk"));
const server = http_1.default.createServer(app_1.default);
server.listen(process.env.PORT || 8080, () => {
    console.log(chalk_1.default.yellow('App is running at http://localhost:%d in %s mode'), process.env.PORT || 8080, process.env.NODE_ENV);
    console.log('Press CTRL-C to stop\n');
});
exports.default = server;
