import getStudents from "../Controllers/getStudents.js";
import addStudents from "../Controllers/addStudents.js";
import express from 'express';
const router=express.Router();

router.get('/get-students',getStudents);
router.post('/add-students',addStudents);

export default router;
