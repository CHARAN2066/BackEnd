import  mongoose, { Schema } from 'mongoose';

const Traineesschema=new Schema({
        name:{
            type:String
        },
        roll:{
            type:String
        },
        phNo:{
            type:Number
        },
        status:{
            type:Boolean,
            default:false
        }
})

const Trainees=mongoose.model("Trainees",Traineesschema);
export default Trainees;