import { Request,Response } from "express";
import { getRepository, Column } from "typeorm";
import User from "../entities/User";
export default {
    async get(req:Request,res:Response){
        let users = await getRepository(User).find({
            relations:['profile']
        });
        res.json(users);
    },
    async create(req:Request,res:Response) {
        let params = req.body;
        let user: User = { ... params}
        user = await getRepository(User).save(user);
        res.json(user);
    }
}