import { Router } from "express";
import { CreateUsers, GetUsers, getOneUsers, updateUsers, DeleteUsers } from "../constroller/userController"

const UserRouter = Router();

UserRouter.post("/admin", CreateUsers.adminPost);
UserRouter.post("/user", CreateUsers.usersPost);
UserRouter.get("/admin", GetUsers.getAdmin);
UserRouter.get("/user", GetUsers.getUsers);
UserRouter.get("/admin/:id", getOneUsers.getOneAdmin);
UserRouter.get("/user/:id", getOneUsers.getOneUser);
UserRouter.put("/admin/:id", updateUsers.updateAdmin);
UserRouter.put("/user/:id", updateUsers.updateUser);
UserRouter.delete("/admin/:id", DeleteUsers.deleteAdmin);
UserRouter.delete("/user/:id", DeleteUsers.deleteUser);

export default UserRouter;