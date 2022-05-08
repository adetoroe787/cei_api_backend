import { Request, Response } from "express";
import { Lecture } from "../entity/lectures/lectures";
import { AppDataSource } from "../data-source";



class LectureController {


  static lecturePost = async (req: Request, res: Response) => {
    const newLecture = {
      name: req.body.name,
      decription: req.body.description,
      is_online: req.body.is_online,
      url: req.body.url,
      is_active: req.body.is_active,
      year: req.body.year,
      lecturer: req.body.lecturer,
    };


    const lecture = AppDataSource.getRepository(Lecture).create(newLecture);
    const result = await AppDataSource.getRepository(Lecture).save(lecture);
    return res.json(result);
  };


  static getLectures = async (req: Request, res: Response) => {
    const result = await AppDataSource.getRepository(Lecture).find();
    return res.json(result);
  };


  static getOneLecture = async (req: Request, res: Response) => {
    const id = req.params.id;
    const lecture = await AppDataSource.getRepository(Lecture).findOne(id);
    return res.json(lecture);
  };


  static updateLecture= async (req: Request, res: Response) => {
    const lecture = await AppDataSource.getRepository(Lecture).findOne(req.params.id);
    if (lecture) {
      AppDataSource.getRepository(Lecture).merge(lecture, req.body);
      const result = await AppDataSource.getRepository(Lecture).save(lecture);
      return res.json(result);
    }
    return res.json({ msg: "Lecture Not Found" });
  };


  static deleteLecture = async (req: Request, res: Response) => {
    const lecture = await AppDataSource.getRepository(Lecture).delete(req.params.id);
    return res.json(lecture);
  };
}

export default LectureController;