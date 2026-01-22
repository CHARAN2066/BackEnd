import JWT from "jsonwebtoken";

const GenerateToken=async(req,res)=>{
    try{
        const jwttoken=JWT.sign(
            {
                "user":"Charan"
            },
            "!1243@aec",
            {
                "e":'1h'  
            }
        )
        res.cookie("token",jwttoken)
        res.status(200).json(jwttoken)
    }
    catch(err){
        res.status(400).json(err)
    }
}

const verifyToken=async(req,res)=>{
    try{
        const t=req.cookies.token
        const a=JWT.verify(t,"!1243@aec")
        console.log(a);
        res.status(200).json(a)
    }
    catch(err){
        res.status(400).json(err)
    }
}

export {GenerateToken,verifyToken}