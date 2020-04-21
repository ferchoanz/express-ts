"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const userRouter_1 = __importDefault(require("./userRouter"));
router.use('/users', userRouter_1.default);
router.get('/', (req, res) => {
    res.json({
        ok: true
    });
});
exports.default = router;
