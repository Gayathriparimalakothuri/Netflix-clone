const jwt = require("jsonwebtoken");

const ENV_VARS =require("../config/envVars");

const generateTokenAndSetCookie = (userId,res)=>{
    const token = jwt.sign({userId},ENV_VARS.JWT_SECRET,{expiresIn:"15d"});
    res.cookie("jwt-netflix",token,{
        maxAge:15*24*60*60*1000, //in ms
        httpOnly:true, //prevent xss attacks cross-site scripting attacks, make it not be accessed by JS
        sameSite:"strict", //CSRF attacks cross-site request forgery attacks
        secure:ENV_VARS.NODE_ENV !== "development"
    })
    return token;
}

module.exports = generateTokenAndSetCookie