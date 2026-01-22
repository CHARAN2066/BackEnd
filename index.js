import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './Routers/Task.js'
import cookieParser from "cookie-parser";

const app=express()

app.use(express.json())
// app.use(cors())
app.use(cookieParser())
app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true         
  })
)

mongoose.connect('mongodb://127.0.0.1:27017/charan')
    .then(()=>console.log("connected"))
    .catch(err=>console.log(err))


app.use('/',router);


app.listen(2000,()=>{
    console.log("server is running")
})