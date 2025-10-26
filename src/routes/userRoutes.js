import express from 'express';
import {createUser, deleteUser, getAllUsers, getUserById, updateUser} from "../controllers/userController.js";

const router = express.Router();

router.post("/user", createUser);

router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

router.get('/user/:id', getUserById);
router.get("/users", getAllUsers);

export default router;
