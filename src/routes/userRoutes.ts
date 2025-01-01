import express from 'express';
import { createUser, getUserProfile, updateUserProfile, deleteUser, getAllUsers } from '../controllers/userControllers'

const router = express.Router();

router.get('/', getAllUsers);

router.get('/:id', getUserProfile);

router.post('/', createUser);

router.put('/:id', updateUserProfile);

router.delete('/:id', deleteUser);

export default router;