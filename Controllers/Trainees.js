import Trainees from '../Models/StudentModel.js';

const addTrainee=async(req,res)=>{
    const myData=req.body;
    await Trainees.insertOne(myData);
    res.send("got the data")
}
export default addTrainee;

