function getRollNo(id){
    return new Promise((resolve,reject)=>{
        resolve({roll:123})
    });
}
function getSubId(rollno,callback){
    return new Promise((resolve,reject)=>{
        resolve({subid:"en-1"})
    });
}

function getMarks(subid){
    return new Promise((resolve,reject)=>{
        resolve({marks:100})
    });
}

getRollNo(576).then((res)=>{
    console.log(res.roll)
    getSubId(res.roll).then((res)=>{
        console.log(res.subid)
        getMarks(res.subid).then((res)=>{
            console.log(res.marks)
        })
        .catch((err)=>console.log(err))
    })
    .catch((err)=>console.log(err))
})
.catch((err)=>console.log(err))
