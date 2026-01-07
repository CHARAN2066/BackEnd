import express from 'express'
// import router from './Routers/ToDoRouter.js'
import cors from 'cors'
import router from './Routers/Task.js'

const app=express()

app.use(express.json())
app.use(cors())

app.use('/',router);


app.listen(2000,()=>{
    console.log("server is running")
})