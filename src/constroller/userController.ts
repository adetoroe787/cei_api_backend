
import { Users } from '../entity/users'

import { Request, Response } from "express";
import { AppDataSource } from '../data-source';


export class CreateUsers {

    static usersPost = async (req: Request, res: Response) => {
        const newUsers = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
        };
        const user = AppDataSource.getRepository(Users).create(newUsers);
        const result = await AppDataSource.getRepository(Users).save(user);
        return res.json(result);
    };


};

export class GetUsers {

    static getUsers = async (req: Request, res: Response) => {
        const result = await AppDataSource.getRepository(Users).find();
        return res.json(result);
    };
};

export class getOneUsers {

    static getOneUser = async (req: Request, res: Response) => {
        //const id = req.params.id;
        const user = await AppDataSource.getRepository(Users).findOneBy({ id: parseInt(req.params.id) });
        return res.json(user);
    };
};

export class updateUsers {

    static updateUser = async (req: Request, res: Response) => {
        const user = await AppDataSource.getRepository(Users).findOneBy({ id: parseInt(req.params.id) });
        if (user) {
            AppDataSource.getRepository(Users).merge(user, req.body);
            const result = await AppDataSource.getRepository(Users).save(user);
            return res.json(result);
        }
        return res.json({ msg: "User Not Found" });
    };
}

export class DeleteUsers {

    static deleteUser = async (req: Request, res: Response) => {
        const user = await AppDataSource.getRepository(Users).delete(req.params.id);
        return res.json(user);
    };
}

