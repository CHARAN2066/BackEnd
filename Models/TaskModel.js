import mongoose from "mongoose";

const schema=new mongoose.Schema({
    username:{
        type:String,
    },
    password:{
        type:String
    }
})

const taskModel=mongoose.model('TaskBackEnd',schema)
export default taskModel;