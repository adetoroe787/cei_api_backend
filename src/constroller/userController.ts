import { Admin } from '../entity/users/admin';
import { Users } from '../entity/users/users'

import { Request, Response } from "express";
import { AppDataSource } from '../data-source';


export class CreateUsers {

    static adminPost = async (req: Request, res: Response) => {
        const newAdmin = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
            address: req.body.address,
            is_active: req.body.is_active,
            role: req.body.role,
            about: req.body.about,
        };
        const admin = AppDataSource.getRepository(Admin).create(newAdmin);
        const result = await AppDataSource.getRepository(Admin).save(admin);
        return res.json(result);
    };

    static usersPost = async (req: Request, res: Response) => {
        const newUsers = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
            address: req.body.address,
            is_active: req.body.is_active,
        };
        const user = AppDataSource.getRepository(Users).create(newUsers);
        const result = await AppDataSource.getRepository(Users).save(user);
        return res.json(result);
    };


};

export class GetUsers {
    static getAdmin = async (req: Request, res: Response) => {
        const result = await AppDataSource.getRepository(Admin).find();
        return res.json(result);
    };

    static getUsers = async (req: Request, res: Response) => {
        const result = await AppDataSource.getRepository(Users).find();
        return res.json(result);
    };
};

export class getOneUsers {
    static getOneAdmin = async (req: Request, res: Response) => {
        const id = req.params.id;
        const admin = await AppDataSource.getRepository(Admin).findOne(id);
        return res.json(admin);
    };

    static getOneUser = async (req: Request, res: Response) => {
        const id = req.params.id;
        const user = await AppDataSource.getRepository(Users).findOne(id);
        return res.json(user);
    };
};

export class updateUsers {
    static updateAdmin = async (req: Request, res: Response) => {
        const admin = await AppDataSource.getRepository(Admin).findOneBy({
            id: req.params.id,
        });
        if (admin) {
            AppDataSource.getRepository(Admin).merge(admin, req.body);
            const result = await AppDataSource.getRepository(Admin).save(admin);
            return res.json(result);
        }
        return res.json({ msg: "Admin Not Found" });
    };

    static updateUser = async (req: Request, res: Response) => {
        const user = await AppDataSource.getRepository(Admin).findOne(req.params.id);
        if (user) {
            AppDataSource.getRepository(Users).merge(user, req.body);
            const result = await AppDataSource.getRepository(Admin).save(user);
            return res.json(result);
        }
        return res.json({ msg: "User Not Found" });
    };
}

export class DeleteUsers {
    static deleteAdmin = async (req: Request, res: Response) => {
        const admin = await AppDataSource.getRepository(Admin).delete(req.params.id);
        return res.json(admin);
    };

    static deleteUser = async (req: Request, res: Response) => {
        const user = await AppDataSource.getRepository(Users).delete(req.params.id);
        return res.json(user);
    };
}






// module.exports = [CreateUsers, GetUsers, getOneUsers, updateUsers, DeleteUsers]