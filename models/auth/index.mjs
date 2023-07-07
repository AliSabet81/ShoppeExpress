import mongoose from "mongoose"

export const User = mongoose.model('User',{
    firstname : String,
    lastname : String,
    email : String,
    password : String,
})
