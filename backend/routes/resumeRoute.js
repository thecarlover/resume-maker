import express from "express";
import { createResume, getResume, updateResume, deleteResume } from "../controllers/resumeController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Create Resume (protected)
router.post("/", authMiddleware, createResume);

// Get Resume (protected)
router.get("/:id", authMiddleware, getResume);

// Update Resume (protected)
router.put("/:id", authMiddleware, updateResume);

// Delete Resume (protected)
router.delete("/:id", authMiddleware, deleteResume);

export default router;
