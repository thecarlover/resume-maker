import express from 'express';
import { 
  register, 
  login, 
  logout, 
 
  updateUserProfile, 
  deleteUserAccount 
} from '../controllers/userController.js';
import isAuthenticated from '../middleware/authMiddleware.js';

const router = express.Router();

// Register user
router.route('/register').post(register);

// Login user
router.route('/login').post(login);

// Logout user
router.route('/logout').get(logout);

// Get user profile (protected route)
router.route('/profile').get(isAuthenticated)

// Update user profile (protected route)
router.route('/profile').put(isAuthenticated, updateUserProfile);

// Delete user account (protected route)
router.route('/profile').delete(isAuthenticated, deleteUserAccount);

export default router;
