import express from "express";
import { updateLanguage } from "../controller/langController.js";

const router = express.Router();

router.post("/", updateLanguage);

export default router;
