import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
//Register User
export const registerUser = async (req, res) => {
    try{
        const { name,email,password } =req.body;
        if(!name || !email || !password){
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields."
            });
        }
         
        const existingUser = await User.findOne({ email }); //mongoDB method findOne
        //await is the promise
        if (existingUser){
            return res.status(409).json({
                success: false,
                message: "User already exists."
            });
        }
        //Generate salt
        const salt = await bcrypt.genSalt(10);

        //Hash password
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });
        res.status(201).json({
            success: true,
            message: "User registered successfully.",
            user:{
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server Error"
        });
    }
};
 //loginUser
export const loginUser =async(req, res) => {
    try{
        //Get email and password from request
        const { email,password } = req.body;

        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "Please fill all fields."
            });
        }
    //Search for the user by email
    const user = await User.findOne({ email });
    //If the user doesn't exist
    if(!user){
        return res.status(404).json({
            success: false,
            message: "User not found."
        });
    }
    //Compare entered password with stored hased password
    const isMatch = await bcrypt.compare(password, user.password);
    //if password was incorrect
    if(!isMatch){
        return res.status(401).json({
            success: false,
            message: "Invalid email or password."
        });
    }
    const token = jwt.sign({
        id: user._id,
        role: user.role
    },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d"
        }
    );
        res.status(200).json({
            success: true,
            message: "Login API is working!",
            token,
            user:{
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    }catch(error){
        res.status(500).json({
            success: false,
            message: "Internal server Error"
        });
    }
};