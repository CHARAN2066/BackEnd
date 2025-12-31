import {addTrainee,get_details,update_details,add_status,delete_by_id} from '../Controllers/Trainees.js';
import express from 'express';

const router=express.Router()

router.post('/add_data',addTrainee);
router.get('/get_data/:id',get_details);
router.put('/update_details/:name',update_details);
router.put('/add_status/:id',add_status);
router.delete('/delete_by_id/:id',delete_by_id)

export default router;