const User = require("../models/usermodel")

const bcryptjs = require("bcryptjs");
const generateTokenAndSetCookie = require("../utils/generateToken");
const signup = async (req, res) => {
    try {
        const { email, password, username } = req.body;
        if (!email || !password || !username) {
            return res.status(400).json({ sucess: false, message: "All fields are required" });
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ sucess: false, message: "Invalid email;" })
        }
        if (password.length < 6) {
            return res.status(400).json({ sucess: false, message: "Password must be at least 6 characters" });
        }

        const existingUserByEmail = await User.findOne({ email: email });
        if (existingUserByEmail) {
            return res.status(400).json({ sucess: false, message: "Email already exists" });
        }

        const existingUserByUsername = await User.findOne({ username: username });
        if (existingUserByUsername) {
            return res.status(400).json({ sucess: false, message: "Username already exists" });
        }

        // encrypting the password to unreadable format
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const PROFILE_PICS = ["/avatar1.jpg", "/avatar2.png", "/avatar3.png"];

        const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)];

        const newUser = new User({
            email,
            password: hashedPassword,
            username,
            image
        });


        generateTokenAndSetCookie(newUser._id, res);
        await newUser.save();
        res.status(201).json({
            sucess: true, user: {
                ...newUser._doc,
                password: ""
            }
        });


    } catch (error) {
        console.log("Error", error.message);
        res.status(500).json({ sucess: false, message: "Internal Server" });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ sucess: false, message: "All fields are required" });
        }
        const user = await User.findOne({ email: email });
        console.log("email", email, !user)
        if (!user) {
            return res.status(400).json({ sucess: false, message: "In valid credentials" });
        }

        const isPasswordCorrect = await bcryptjs.compare(password, user.password);
        console.log("paswd", isPasswordCorrect, password)
        if (!isPasswordCorrect) {
            return res.status(400).json({ sucess: false, message: "Invalid Password" });
        }

        generateTokenAndSetCookie(user._id, res);
        res.status(200).json({
            sucess: true, message: "Login Successfully", User: {
                ...user._doc,
                password: ""
            }
        });
    } catch (error) {
        console.error("Error while login", error.message);
        return res.status(500).json({ sucess: false, message: "Internal server error" });
    }
}

const logout = async (req, res) => {
    try {
        res.clearCookie("jwt-netflix");
        res.status(200).json({ sucess: true, message: "Logged out successfully" });
    } catch (error) {
        console.log("Error while logout", error.message);
        res.status(500).json({ sucess: false, message: "Internal Server Error" });
    }
}

const authCheck = async(req,res) =>{
    console.log("req",req,res)
    try {
		console.log("req.user:", req.user);
		res.status(200).json({ success: true, user: req.user });
	} catch (error) {
		console.log("Error in authCheck controller", error.message);
		res.status(500).json({ success: false, message: "Internal server error" });
	}
}

module.exports = {login,logout,signup,authCheck}