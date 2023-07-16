export const validate = (schema) => async (req,res,next) =>{
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