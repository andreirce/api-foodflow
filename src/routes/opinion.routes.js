import { Router } from "express";
import { createOpinion, deleteOpinion, getAllOpinions, updateOpinion } from "../controllers/opinion.controller.js";

export const opinionRouter = Router()

opinionRouter.post("/opinion", createOpinion)
opinionRouter.get("/opinion", getAllOpinions)
opinionRouter.put("/opinion/:opinion_id", updateOpinion)
opinionRouter.delete("/opinion/:opinion_id", deleteOpinion)