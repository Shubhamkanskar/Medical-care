import express from 'express';
import { updateDoctor, deleteDoctor, getAllDoctor, getSingleDoctor } from "../Controles/doctorController.js";

import { authenticate, restrict } from '../auth/verifyToken.js';
import reviewRouter from './review.js'

const router = express.Router();

router.use('./:docotorID/review', reviewRouter);

router.get('/:id', getSingleDoctor)
router.get('/', getAllDoctor);
router.get('/:id', authenticate, restrict(['doctor']), updateDoctor);
router.get('/:id', authenticate, restrict(['doctor']), deleteDoctor);

export default router;

