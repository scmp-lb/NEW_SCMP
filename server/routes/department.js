import express from "express";

/* IMPORTS FROM CONTROLLERS */
import {
  createDepartment,
  getAllDepartments,
} from "../controllers/department.js";

/* IMPORTS FROM MIDDLEWARES */
import { isAuthorized } from "../middlewares/auth.js";

/* CREATE THE ROUTE */
const router = express.Router();

/* OPERATIONS */
router.post("/", createDepartment);
router.get("/", getAllDepartments);

export default router;
