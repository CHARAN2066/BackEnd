import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './Routers/Task.js'

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/charan')
    .then(()=>console.log("connected"))
    .catch(err=>console.log(err))


app.use('/',router);


app.listen(2000,()=>{
    console.log("server is running")
})