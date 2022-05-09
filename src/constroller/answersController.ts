import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Answer } from "../entity/answers";



export class AnswerController {


  static postAnswer = async (req: Request, res: Response) => {
    const newAnswer = {
      content: req.body.description,
      question: req.body.question,
    };


    const answer = AppDataSource.getRepository(Answer).create(newAnswer);
    const result = await AppDataSource.getRepository(Answer).save(answer);
    return res.json(result);
  };


  static getAnswer = async (req: Request, res: Response) => {
    const result = await AppDataSource.getRepository(Answer).find();
    return res.json(result);
  };


  static getOneAnswer= async (req: Request, res: Response) => {
    //const id = req.params.id;
    const answer = await AppDataSource.getRepository(Answer).findOneBy({ id: parseInt(req.params.id) });
    return res.json(answer);
  };


  static updateAnswer = async (req: Request, res: Response) => {
    const answer = await AppDataSource.getRepository(Answer).findOneBy({ id: parseInt(req.params.id) });
    if (answer) {
      AppDataSource.getRepository(Answer).merge(answer, req.body);
      const result = await AppDataSource.getRepository(Answer).save(answer);
      return res.json(result);
    }
    return res.json({ msg: "Answer Not Found" });
  };


  static deleteTest= async (req: Request, res: Response) => {
    const answer = await AppDataSource.getRepository(Answer).delete(req.params.id);
    return res.json(answer);
  };
}

