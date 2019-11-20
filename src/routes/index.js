"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Base routes file contains all the sub routes
 */
const express_1 = require("express");
const user_1 = __importDefault(require("./user"));
// Init router and path
const router = express_1.Router();
router.use('/name', (req, res) => {
    return res.send('Working');
});
// Add sub-routes
router.use('/user', user_1.default);
exports.default = router;
