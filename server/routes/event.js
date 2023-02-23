import express from "express";

/* IMPORTS FROM CONTROLLERS */
import { createEvent, getAllEvents } from "../controllers/event.js";

/* IMPORTS FROM MIDDLEWARES */
import { isAuthorized } from "../middlewares/auth.js";

/* CREATE THE ROUTE */
const router = express.Router();

/* OPERATIONS */
router.post("/", createEvent);
router.get("/", getAllEvents);

export default router;
