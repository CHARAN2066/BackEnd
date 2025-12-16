import express from 'express'
import router from './Routers/getStudentRouters.js'

const app=express()

app.use('/',router)

app.listen(2000,()=>{
    console.log("server is running")
})

