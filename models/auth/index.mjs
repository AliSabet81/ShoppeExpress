import mongoose, { Schema } from "mongoose"
import * as yup from 'yup'

export const SignUpSchema = yup.object({
    body: yup.object({
        email:yup.string().required(),
        password:yup.string().required(),
        firstname:yup.string().required(),
        lastname:yup.string().required()
    })
})

const UserSchema = new Schema({
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    firstname:{
        type: String,
        required:true
    },
    lastname:{
        type: String,
        required:true
    }
})

export const User = mongoose.model('User',UserSchema)
