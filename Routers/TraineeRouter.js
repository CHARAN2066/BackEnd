import addTrainee from '../Controllers/Trainees.js';
import express from 'express';

const router=express.Router()
router.post('/get_data',addTrainee);
export default router;