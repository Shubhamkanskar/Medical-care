import express from 'express';
import { updateUser, deleteUser, getAllUser, getSingleUser } from "../Controles/userController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();

// Get a single user by ID (for patients)
router.get('/single/:id', authenticate, restrict(['patient']), getSingleUser);

// Get all users (for admins)
router.get('/', authenticate, restrict(['admin']), getAllUser);

// Update a user (Use PUT or PATCH method)
router.put('/:id', authenticate, restrict(['patient']), updateUser);

// Delete a user (Use DELETE method)
router.delete('/:id', authenticate, restrict(['patient']), deleteUser);

export default router;
