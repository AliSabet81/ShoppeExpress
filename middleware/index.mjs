import jwt from "jsonwebtoken"

export const validatiosMiddleware = (schema) => async (req,res,next) =>{
    try {
        await schema.validate({
            body: req.body,
            query: req.query,
            params: req.params
        })
        return next()
    } catch (error) {
        res.status(400).json(error)
    }
}

export const UserValidation = async(req,res,next) =>{
    try {
        const token = req.headers["authorization"];
        if (!token) {
            return res.status(401).json({msg:"Un Authorized"})
        } else {}
        const validate = await jwt.verify(token,process.env.JWT_SECRET_KEY)
        if (!validate) {
            return res.status(401).json({msg : "Access Denied"})
        } 
        next()
    } catch (error) {
        console.log(error);
        res.status(401).json({msg : "Access Denied"})
    }
}