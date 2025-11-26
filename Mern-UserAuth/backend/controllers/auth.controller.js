import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

//create a token(jwt token metjod)
const generateToken=(user)=>{
    return jwt.sign(
        {id:user._id,email:user.email},
        process.env.JWT_SECRET,
        {expiresIn:process.env.JWT_EXPIRES_IN}
    );

}

//register user

export const registerUser=async(req,res)=>{
const{fullname,email,password}=req.body 
try{
       // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });

}
//create new user
const user = await User.create({ fullname, email, password });

//generate token after registration
const token = generateToken(user);

res.status(201).json({
    message:"Registration Sucessfull",
    token,
    user:{id:user._id,fullname:user.fullname,email:user.email}
});
}
catch(error){
  console.error("REGISTER ERROR:", error.message, error.stack); 
  res.status(500).json({ message: 'Server error', error: error.message });
}
}

// login the user
export const loginUser=async(req,res)=>{
        const { email, password } = req.body;

    try{
        //check email of user
            const user = await User.findOne({ email });
 if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

 //check password
const isMatch = await user.matchPassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });

    //generate token
        const token = generateToken(user);
  res.json({
      message: "Login successful",
      token,
      user: { id: user._id, fullname: user.fullname, email: user.email }
    });
    }
    catch(error){
 console.error("LOGIN ERROR:", error);
    res.status(500).json({ message: "Server error", error });
    }
}