import {addTrainee,get_details,update_details} from '../Controllers/Trainees.js';
import express from 'express';

const router=express.Router()

router.post('/add_data',addTrainee);
router.get('/get_data/:id',get_details);
router.put('/update_details/:name',update_details);

export default router;