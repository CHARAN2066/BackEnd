let Friends=[
    {
        "name":"Charan",
        "roll":76
    },
    {
        "name":"Varun",
        "roll":7
    }
]

const addData=(req,res)=>{
    const {name,roll}=req.params
    Friends.push({name,roll})
    res.json("Result is pushed")
}

const getData=(req,res)=>{
    res.json(Friends);
}

const updateData=(req,res)=>{
    const nid=req.params.id;
    const new_name=req.params.new_name;
    Friends.forEach((ele,id)=>{
        if(ele.roll==nid){
            ele.name=new_name;
        }   
    })
    res.json("updated")
}

const deleteData=(req,res)=>{
    const did=req.params.id;
    Friends=Friends.filter(ele=>ele.roll!=did)
    res.json("Deleted")
    
}
export {addData,getData,updateData,deleteData};