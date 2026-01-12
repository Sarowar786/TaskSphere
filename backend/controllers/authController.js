const user = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/User")

//Generate jwt token
const generateToken = (userID) =>{
    return jwt.sign({id: userID}, process.env.JWT_SECRET, {expiresIn:"7d"})
}


//Register a new user 
// public
const registerUser = async(req, res)=>{
    try {
        const {name, email, password, profileImageUrl, adminInviteToken } = req.body;

        // check if user already exist
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({message:"User already exists"});
        }

        // Determine user role : if correct token provide? admin : member
        let role ="member";
        if(adminInviteToken && adminInviteToken == process.env.ADMIN_INVITE_TOKEN){
            role = "admin"
        }

        //Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //Create user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            profileImageUrl,
            role
        });

        //return user data and token
        
            res.status(201).json({
                _id:user._id,
                name:user.name,
                email:user.email,
                profileImageUrl:user.profileImageUrl,
                role:user.role,
                token:generateToken(user._id)
            })
    } catch (error) {
        res.status(500).json({message: "Server error", error:error.message})
    }
}



//login user
const loginUser = async(req, res)=>{
    try {
        
    } catch (error) {
        res.status(500).json({message: "Server error", error:error.message})
    }
}

//Get user profile
const getUserProfile = async(req, res)=>{
    try {
        
    } catch (error) {
        res.status(500).json({message: "Server error", error:error.message})
    }
}
//Update user profile
const updateUserProfile = async(req, res)=>{
    try {
        
    } catch (error) {
        res.status(500).json({message: "Server error", error:error.message})
    }
}


module.exports = { registerUser,loginUser,getUserProfile,updateUserProfile}