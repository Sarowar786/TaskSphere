const express = require("express");
const { registerUser, loginUser, getUserProfile, updateUserProfile } = require("../controllers/authController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// auth routes
router.post("/register", registerUser); //for register user
router.post("/login", loginUser); //for login user
router.get("/profile", protect, getUserProfile); //for get user profile
router.get("/profile", protect, updateUserProfile); //for update user profile


module.exports = router;