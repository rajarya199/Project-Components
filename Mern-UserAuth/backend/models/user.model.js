import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required: true,
      unique: true,
    
    },
     password: {
      type: String,
      required: true,
      minlength: 8,
    },
    

},  { timestamps: true })

//hash  password before saving
userSchema.pre("save",async function(next){
     if (this.isModified("password") && this.password) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next()
})

//check password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export const User = mongoose.model("User", userSchema);
