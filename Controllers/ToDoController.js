import todomodel from "../Models/ToDo.js";

const addData=async(req,res)=>{
    const task=req.body.task;
    // console.log(task);
    const modifiedData=await todomodel.create({task:task})
    res.send("Added successfully")
}

const deleteData=async(req,res)=>{
    const d_id=req.body.id;
    const deleted_data=await todomodel.findByIdAndDelete({_id:d_id})
    res.send("Deleted Successfully")
}

const updateData=async(req,res)=>{
    const u_id=req.body.id;
    const new_task=req.body.task
    const u_data=await todomodel.findByIdAndUpdate(
        u_id,
        {task:new_task},
        {new:true}
    )
    res.send("Updated Successfully")
}

const showData=async(req,res)=>{
    const all_data=await todomodel.find({})
    res.send(all_data);
}

export {addData,deleteData,updateData,showData};