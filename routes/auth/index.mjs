import { Router } from "express";
import { User } from "../../models/auth/index.mjs";

export const AuthRoutes = Router();

AuthRoutes.post('/api/register', async(req,res)=>{
    if (!req.body.email) return res.status(400).json({
        msg:'username is required'
    })

    const isUser = User.findOne({email:req.body.email})
    if (isUser) return res.status(400).json({
        msg:'username with this email alredy exists!'
    })

    const user = await new User({...req.body})
    await user.save()
    res.status(201).json({
        msg:"user created successfully"
    })
})

AuthRoutes.get('/api/login', async(req,res)=>{
    console.log("ok");
})