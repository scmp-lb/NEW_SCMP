import express from "express";

/* IMPORTS FROM CONTROLLERS */
import { createSws, getAllSws, getOneSws } from "../controllers/sws.js";

/* IMPORTS FROM MIDDLEWARES */
import { isAuthorized } from "../middlewares/auth.js";

/* CREATE THE ROUTE */
const router = express.Router();

/* OPERATIONS */
router.post("/", createSws);
router.get("/", getAllSws);
router.get("/:id", getOneSws);

export default router;
