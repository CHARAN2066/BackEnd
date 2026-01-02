import {addData,deleteData,updateData,showData} from "../Controllers/ToDoController.js";
import express from 'express';

const router=express.Router()
router.post('/addData',addData);
router.delete('/deleteData',deleteData);
router.put('/updateData',updateData)
router.get('/showData',showData)

export default router;