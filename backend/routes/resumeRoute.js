import express from "express";
import { createResume, getResume, updateResume, deleteResume } from "../controllers/resumeController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Create Resume (protected)
router.route('/create').post(authMiddleware,createResume);

// Get Resume (protected)
router.route('/get').post(authMiddleware,getResume);

// Update Resume (protected)
router.route('/update').put(authMiddleware,updateResume);

// Delete Resume (protected)
router.route('/delete').delete(authMiddleware,deleteResume);

export default router;
