import { Router } from "express";
import { CreateUsers, GetUsers, getOneUsers, updateUsers, DeleteUsers } from "../constroller/userController"

const UserRouter = Router();


UserRouter.post("/user", CreateUsers.usersPost);

UserRouter.get("/user", GetUsers.getUsers);

UserRouter.get("/user/:id", getOneUsers.getOneUser);

UserRouter.put("/user/:id", updateUsers.updateUser);

UserRouter.delete("/user/:id", DeleteUsers.deleteUser);

export default UserRouter;