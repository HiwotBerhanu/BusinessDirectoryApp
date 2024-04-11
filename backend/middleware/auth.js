const jwt=require('jsonwebtoken');

const {User}=require('../models/user');

exports.isAuth=async(req,res,next)=>{

    console.log("in authn module")
    
    if(req.headers && req.headers.authorization){
        const token=req.headers.authorization.split(" ")[1]
        const decode=jwt.verify(token,process.env.JWT_SECRET)
        const user=await User.findById(decode.userId)
        if(!user){
            res.json({success:false,message:"unauthorized access"})
        }
        req.user=user
        await console.log('Authorized to post')
        next();
    }else{
        res.json({success:false,message:"unauthorized access"})

}


}