import { Router } from "express";
import { createUser, deleteUser, getAllUser, updateUser, uploadImageUser } from "../controllers/User.controller.js";
import { multerUpload } from "../config/multer.js";

export const userRouter = Router()

userRouter.post("/user", createUser)
userRouter.post("/user-upimage/:user_id", multerUpload, uploadImageUser)
userRouter.get("/user", getAllUser)
userRouter.put("/user/:user_id", updateUser)
userRouter.delete("/user/:user_id", deleteUser)