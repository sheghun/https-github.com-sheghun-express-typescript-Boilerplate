"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Handles all the user based requests
 */
const express_1 = require("express");
const router = express_1.Router();
router.get('/', (req, res) => {
    return res.json({ message: 'You requested a user resource' });
});

exports.default = router;
