import { Router } from "express";
import TestController from "../constroller/testController"

const Testrouter = Router();

Testrouter.post("/test", TestController.postTest);
Testrouter.get("/test", TestController.getTest);
Testrouter.get("/test/:id", TestController.getOneTest);
Testrouter.put("/test/:id", TestController.updateTest);
Testrouter.delete("/test/:id", TestController.deleteTest);

export default Testrouter;