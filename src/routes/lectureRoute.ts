import { Router } from "express";
import LectureController from "../constroller/lectureController"

const Lecturerouter = Router();

Lecturerouter.post("/lecture", LectureController.lecturePost);
Lecturerouter.get("/lecture", LectureController.getLectures);
Lecturerouter.get("/lecture/:id", LectureController.getOneLecture);
Lecturerouter.put("/lecture/:id", LectureController.updateLecture);
Lecturerouter.delete("/lecture/:id", LectureController.deleteLecture);

export default Lecturerouter;