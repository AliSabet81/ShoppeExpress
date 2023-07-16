import { Router } from "express";
import { SignUpSchema, User } from "../../models/auth/index.mjs";
import { validate } from "../../helpers/index.mjs";
import bcrypt from "bcrypt";
export const AuthRoutes = Router();

AuthRoutes.post('/api/register',validate(SignUpSchema), async(req,res)=>{
    const isUser = await User.findOne({email: req.body.email})
    if (isUser) {
        return res.status(400).json({
            msg: 'username with this email alredy exists!'
        })
    }
    
    try {
        const password = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(process.env.SECRET_KET,password)
        const user = await new User({...req.body,password:hashed})
        await user.save()
        res.status(201).json({
            user,
            msg:"user created successfully"
        })
    } catch (error) {
        res.status(400).json(error)
    }
})

AuthRoutes.get('/api/login', async(req,res)=>{
    console.log("ok");
})