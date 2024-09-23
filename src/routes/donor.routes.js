import { Router } from "express";
import { createDonor, deleteDonor, getAllDonor, updateDonor, uploadImageDonor } from "../controllers/Donor.controller.js";
import { multerUpload } from "../config/multer.js";

export const donorRouter = Router()

donorRouter.post("/donor", createDonor)
donorRouter.post("/donor-upimage/:donor_id", multerUpload, uploadImageDonor)
donorRouter.get("/donor", getAllDonor)
donorRouter.put("/donor/:donor_id", updateDonor)
donorRouter.delete("/donor/:donor_id", deleteDonor)