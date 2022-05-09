import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Question } from "../entity/questions";



export class QuestionController {


  static postQuestion = async (req: Request, res: Response) => {
    const newQuetion = {
      name: req.body.name,
      content: req.body.description,
      test: req.body.test,
    };


    const question = AppDataSource.getRepository(Question).create(newQuetion);
    const result = await AppDataSource.getRepository(Question).save(question);
    return res.json(result);
  };


  static getQuestions = async (req: Request, res: Response) => {
    const result = await AppDataSource.getRepository(Question).find();
    return res.json(result);
  };


  static getOneQuestion= async (req: Request, res: Response) => {
    //const id = req.params.id;
    const question = await AppDataSource.getRepository(Question).findOneBy({ id: parseInt(req.params.id) });
    return res.json(question);
  };


  static updateQuestion= async (req: Request, res: Response) => {
    const question = await AppDataSource.getRepository(Question).findOneBy({ id: parseInt(req.params.id) });
    if (question) {
      AppDataSource.getRepository(Question).merge(question, req.body);
      const result = await AppDataSource.getRepository(Question).save(question);
      return res.json(result);
    }
    return res.json({ msg: "Question Not Found" });
  };


  static deleteTest= async (req: Request, res: Response) => {
    const question = await AppDataSource.getRepository(Question).delete(req.params.id);
    return res.json(question);
  };
}

