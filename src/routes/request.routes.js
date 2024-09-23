import { Router } from "express";
import { createRequest, deleteRequest, getAllRequest, updateRequest } from "../controllers/request.controller.js";

export const requestRouter = Router()

requestRouter.post("/request", createRequest)
requestRouter.get("/request", getAllRequest)
requestRouter.put("/request/:request_id", updateRequest)
requestRouter.delete("/request/:request_id", deleteRequest)