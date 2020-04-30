"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Profile_1 = __importDefault(require("../entities/Profile"));
const typeorm_1 = require("typeorm");
exports.default = {
    async get(req, res) {
        let profiles = await typeorm_1.getRepository(Profile_1.default).find();
        res.json(profiles);
    }
};
