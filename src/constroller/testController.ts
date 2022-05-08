import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Test } from "../entity/tests/test";



export class TestController {


  static postTest = async (req: Request, res: Response) => {
    const newtest = {
      name: req.body.name,
      decription: req.body.description,
      is_active: req.body.is_active,
      year: req.body.year,
    };


    const test = AppDataSource.getRepository(Test).create(newtest);
    const result = await AppDataSource.getRepository(Test).save(test);
    return res.json(result);
  };


  static getTest = async (req: Request, res: Response) => {
    const result = await AppDataSource.getRepository(Test).find();
    return res.json(result);
  };


  static getOneTest= async (req: Request, res: Response) => {
    const id = req.params.id;
    const test = await AppDataSource.getRepository(Test).findOne(id);
    return res.json(test);
  };


  static updateTest= async (req: Request, res: Response) => {
    const test= await AppDataSource.getRepository(Test).findOne(req.params.id);
    if (test) {
      AppDataSource.getRepository(Test).merge(test, req.body);
      const result = await AppDataSource.getRepository(Test).save(test);
      return res.json(result);
    }
    return res.json({ msg: "test Not Found" });
  };


  static deleteTest= async (req: Request, res: Response) => {
    const test = await AppDataSource.getRepository(Test).delete(req.params.id);
    return res.json(test);
  };
}

export default TestController;