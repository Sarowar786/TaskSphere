const user = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

//Generate jwt token
const generateToken = (userID) =>{
    return jwt.sign({id: userID}, process.env.JWT_SECRET, {expiresIn:"7d"})
}


//Register a new user 
// public
const registerUser = async(req, res)=>{

}

//login user
const loginUser = async(req, res)=>{

}

//Get user profile
const getUserProfile = async(req, res)=>{

}
//Update user profile
const updateUserProfile = async(req, res)=>{

}


module.exports = { registerUser,loginUser,getUserProfile,updateUserProfile}