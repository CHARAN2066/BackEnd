
const getStudents=(req,res)=>{
    res.send("hii");
}

const addStudents=(req,res)=>{
    const data=req.body;
    res.send(data);
}
export {getStudents,addStudents};