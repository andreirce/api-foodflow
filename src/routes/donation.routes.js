import { Router } from "express";
import { createDonation, deleteDonation, getAllDonation, updateDonation } from "../controllers/donation.controller.js";


export const donationRouter = Router()

donationRouter.post("/donation", createDonation)
donationRouter.get("/donation", getAllDonation)
donationRouter.put("/donation/:donation_id", updateDonation)
donationRouter.delete("/donation/:donation_id", deleteDonation)