import mongoose, { Schema } from "mongoose";
const ToDoSchema=new Schema({
    task:{
        type:String
    }
})

const todomodel=mongoose.model("ToDo",ToDoSchema);

export default todomodel;