"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = __importDefault(require("../entities/User"));
exports.default = {
    async get(req, res) {
        // let users = await getRepository(User).find({
        //     relations:['profile']
        // });
        console.log("hola");
        let users = await typeorm_1.getRepository(User_1.default)
            .createQueryBuilder("u")
            .innerJoin('profile', 'p');
        res.json(users);
    },
    async create(req, res) {
        let params = req.body;
        let user = { ...params };
        user = await typeorm_1.getRepository(User_1.default).save(user);
        res.json(user);
    }
};
