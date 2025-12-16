import addStudents from "../Controllers/addStudents";
import express from 'express'
const app=express()
app.use(express.json())
const router=express.Router()
router.get('/add',addStudents);
export default router;