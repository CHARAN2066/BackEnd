import http from 'http'
const sever=http.createServer((req,res)=>{
    if(req.url=='/users')
        res.end('This is users')
    else
    res.end("Hi from server");
})

sever.listen(2000,()=>{
    console.log("Server is running")
})