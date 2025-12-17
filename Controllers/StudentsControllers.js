
const getStudents=(req,res)=>{
    res.status(200).json("hii");
}

const addStudents=(req,res)=>{
    const data=req.body;
    console.log(JSON.stringify(data))
    res.json();
}
export {getStudents,addStudents};