import {getStudents,addStudents} from '../Controllers/StudentsControllers.js';
import express from 'express';
const router=express.Router();

router.get('/get-students',getStudents);
router.post('/add-students',addStudents);

export default router;
