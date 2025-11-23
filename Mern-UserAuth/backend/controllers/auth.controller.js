import jwt from "jsonwebtoken";
import { User } from "../models/user.model";

//create a token(jwt token metjod)
const generateToken=(user)=>{
    return jwt.sign(
        {id:user._id,email:user.email},
        process.env.JWT_SECRET,
        {expiresIn:process.env.JWT_EXPIRES_IN}
    );

}