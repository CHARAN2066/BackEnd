import {addData,getData,updateData,deleteData} from "../Controllers/Task.js";
import express from 'express';
const router=express.Router()

router.post('/add-data/:name/:roll',addData)
router.get('/get-data',getData)
router.put('/update-data/:id/:new_name',updateData)
router.delete('/delete-data/:id',deleteData)
export default router;