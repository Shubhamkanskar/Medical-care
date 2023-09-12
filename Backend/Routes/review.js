import express from 'express';
import { getAllReviews, createReview } from '../Controles/reviewController.js';
import { authenticate, restrict } from '../auth/verifyToken.js';

const router = express.Router();


router.route('/').get(getAllReviews).post(authenticate, restrict(['patient']), createReview);


export default router;