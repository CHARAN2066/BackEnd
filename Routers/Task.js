import {addData,getData,deleteData,updateData} from "../Controllers/Task.js";
import {GenerateToken, verifyToken } from "../Controllers/JWT.js";
import express from 'express';
const router=express.Router()

router.post('/add-data/:username/:password',addData)
router.get('/get-data',getData)
router.put('/update-data/:id/:new_name',updateData)
router.delete('/delete-data/:id',deleteData)
router.get('/generate-token',GenerateToken)
router.get('/verify-token',verifyToken)
export default router;