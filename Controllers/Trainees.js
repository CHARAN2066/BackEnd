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

const update_details=async(req,res)=>{
    const name=req.params.name;
    const data=req.body.name;
    await Trainees.updateOne(
        {name:name},
        {$set:{name:data}}
    );
    res.send("data Updated")
}
export {addTrainee,get_details,update_details};

