const express = require("express");
const dotenv = require("dotenv");
const User = require("../Models/User");
const bcrypt = require("bcrypt");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
dotenv.config();

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Signup Route
const signup = async (req, res) => {
    try {
        const { firstName, lastName, userBio, userEmail, userMobile, userName, userPassword } = req.body;

        // If current user exists
        const existingUser = await User.findOne({ userEmail });
        if (existingUser) {
            return res.status(401).send("User Already Exists with this email"); // Added return
        }

        // Check if file is provided
        if (!req.file) {
            return res.status(400).json({ error: "No Profile Image Provided" });
        }

        // Upload to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
        console.log(result);

        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const encryptedPassword = await bcrypt.hash(userPassword, salt);
        console.log("Request Body: ", req.body);

        // Create new user
        const newUser = new User({
            firstName,
            lastName,
            userBio,
            userEmail,
            userMobile,
            userName,
            userPassword: encryptedPassword,
            profileImage: result.secure_url
        });

        await newUser.save();

        return res.status(200).json({
            status: "Ok",
            user: newUser
        });

    } catch (error) {
        console.error(error); // Log the error
        return res.status(500).json({ error: "Server error" }); // Use 500 for server errors
    }
};

const login = async (req, res) => {
    try {
        const { userEmail, userPassword } = req.body;

        const user = await User.findOne({ userEmail });

        if (user) {
            const passwordMatch = await bcrypt.compare(userPassword, user.userPassword);
            if (passwordMatch) {
                return res.status(200).json(user); // Send 200 for successful login
            } else {
                return res.status(401).json({ status: "Error", message: "Invalid credentials" }); // Use 401 for unauthorized
            }
        } else {
            return res.status(404).json({ status: "Error", message: "User not found" }); // Use 404 for user not found
        }

    } catch (error) {
        console.error(error); // Log the error
        return res.status(500).json({ error: "Server error" }); // Use 500 for server errors
    }
};

module.exports = { signup, login };

