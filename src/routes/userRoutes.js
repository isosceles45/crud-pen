import express from 'express';
import {createUser, deleteUser, getAllUsers, getUserById, updateUser} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/user", createUser);

userRouter.put("/user/:id", updateUser);
userRouter.delete("/user/:id", deleteUser);

userRouter.get('/user/:id', getUserById);
userRouter.get("/users", getAllUsers);

export default userRouter;
