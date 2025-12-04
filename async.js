const temp=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Response from the promise")
            // resolve("hi")
        }, 2000);

    })
}

const fun1=async()=>{
    console.log("hi")
    await temp().then(res=>console.log(res))
    console.log("hello")
    console.log("charan")
}
fun1()