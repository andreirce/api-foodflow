import { Router } from "express";
import { createAddress, deleteAddress, getAllAddress, updateAddress } from "../controllers/address.controller.js";

export const addressRouter = Router()

addressRouter.post("/address", createAddress)
addressRouter.get("/address", getAllAddress)
addressRouter.put("/address/:address_id", updateAddress)
addressRouter.delete("/address/:address_id", deleteAddress)