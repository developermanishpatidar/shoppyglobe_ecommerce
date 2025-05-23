import jwt from 'jsonwebtoken';

// Verify token functionality
export function verifyToken(req,res,next){
    if(req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "JWT"
    ) {
        jwt.verify(
            req.headers.authorization.split(" ")[1],
            "secretKey", 
            (err,verifiedToken)=>{
                if(err){
                    return res.status(403).json({message: "invalid Token"})
                }
                req.user = verifiedToken;
                next();
            }
        )
        
    } else{
        return res.status(409).json({message:"token not found"})
    }
}