import Trainees from '../Models/StudentModel.js';

const addTrainee=async(req,res)=>{
    const myData=req.body;
    await Trainees.insertOne(myData);
    res.send("got the data")
}

const get_details=async(req,res)=>{
    const data=await Trainees.findOne({name:id})
    res.json(data);
}

const update_details = async (req, res) => {
        const name=req.params.name;
        const data=req.body;
        const updated_data = await Trainees.findOneAndUpdate(
            {name: name},data,{new:true}
        );
        res.send(updated_data);
};

const add_status=async (req,res)=>{
    const status={"status":false}
    const id=req.params.id;
    const update_data=await Trainees.updateMany(
        {},
        {$set:status},
        {new:true}
    );
    res.send(update_data)
}

const delete_by_id=async(req,res)=>{
    const id=req.params.id
    const delete_status=await Trainees.findByIdAndDelete(id)
    res.send("hello")
}

export {addTrainee,get_details,update_details,add_status,delete_by_id};

