import User from '../Models/user.model.js';
import bcryptjs from 'bcryptjs';

export const authSignup = async (req,res)=>{
    const {username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({username, email, password: hashedPassword});
    try {
        await newUser.save();
        res.status(201).json({message: "New user created"})
    } catch (error) {
        res.status(500).json(error.message)
    }
    
};