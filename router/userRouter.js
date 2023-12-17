import  express  from "express";
import {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} from "../controller/userController.js";

const userRouter = express.Router();
userRouter.get("/api/user/display", getAllUsers);
userRouter.get("/api/user/display/:id", getUser);
userRouter.post("/api/user/create/", createUser);
userRouter.put("/api/user/update/:id", updateUser);
userRouter.delete("/api/user/delete/:id", deleteUser);

export default userRouter;
