import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const authorizeUser= async (req, res, next) => {
  
    const authHeader = req.headers.authorization;

    // Get the token  from the Authorization header if it starts with "Bearer "
    const token = (authHeader && authHeader.toLowerCase().startsWith('bearer ') ? authHeader.split(' ')[1] : null);
  if (!token)
    return res.status(401).json({ message: "Not authorized, token missing" });

  try {
    //verify token with jwt secreet
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // 4. Attach the decoded user information to the request object
 // Fetch user (WITHOUT password)
    const user = await User.findById(decoded.id).select("-password");

    // Check user existence
    if (!user) {
      return res.status(401).json({ message: "User not found or removed" });
    }

    req.user = user; // Attach user to request
   
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token invalid or expired" });
  }
};
