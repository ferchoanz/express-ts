import Profile from "../entities/Profile";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
export default {
   async get(req:Request, res:Response) {
    let profiles = await getRepository(Profile).find();
    res.json(profiles);
   }
}