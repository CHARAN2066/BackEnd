import taskModel from "../Models/TaskModel.js"

const addData=async (req,res)=>{
    const {username,password}=req.params
    try
    {
        await taskModel.create({username,password})
        res.json("Result is pushed")
    }
    catch(err){
        console.log(err)
    }
}

const getData=async(req,res)=>{
    try{
        const all_data=await taskModel.find({})
        res.json(all_data);
    }
    catch(err){
        console.log(err)
    }
}

const updateData=async (req,res)=>{
    const nid=req.params.id;
    const new_name=req.params.new_name;
    await taskModel.findByIdAndUpdate(nid,{$set:{username:new_name}})
    res.json("updated")
}

const deleteData=async(req,res)=>{
    const did=req.params.id;
    await taskModel.findByIdAndDelete(did); 
    res.json("Deleted")
    
}
export {addData,getData,deleteData,updateData};