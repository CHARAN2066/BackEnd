import Trainees from '../Models/StudentModel.js';

const addTrainee=async(req,res)=>{
    const myData=req.body;
    await Trainees.insertOne(myData);
    res.send("got the data")
}

const get_details=async(req,res)=>{
    const id=req.params.id;
    const data=await Trainees.findOne({name:id})
    res.json(data);
}
export {addTrainee,get_details};

