"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const config_1 = __importDefault(require("../config/config"));
class db {
    async init() {
        try {
            // @ts-ignore
            this.connection = typeorm_1.createConnection({
                ...config_1.default.development,
                entities: [
                    __dirname + "/entities/*.*"
                ]
            });
            return this.connection;
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    }
}
exports.default = db;
