import express from "express";
import upload from "../utils/upload.js";
import { uploadReport } from "../controllers/reportController.js";

const router = express.Router();

router.post("/upload", upload.single("report"), uploadReport);

export default router;