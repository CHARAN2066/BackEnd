import {getStudents,addStudents} from '../Controllers/StudentsControllers.js';
import express, { json } from 'express';
const router=express.Router();
const app=express()


router.get('/get-students',getStudents);
router.post('/add-students',addStudents);

export default router;