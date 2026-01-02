import express from 'express'
import router from './Routers/ToDoRouter.js'
import cors from 'cors'
import mongoose from 'mongoose'

const app=express()

app.use(express.json())
app.use(cors())

app.use('/',router);


mongoose.connect('mongodb://127.0.0.1:27017/charan')
.then(()=>console.log("connected"))
.catch(error=>console.log(error))


app.listen(2000,()=>{
    console.log("server is running")
})