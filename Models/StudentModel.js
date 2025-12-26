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
        }
})

const Trainees=mongoose.model("Trainees",Traineesschema);
export default Trainees;