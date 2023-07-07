import express from "express";
import { EnvConfig } from "./configs/index.mjs";
import { DbConfig } from "./configs/db/index.mjs";
import { AuthRoutes } from "./routes/index.mjs";
const app = express()

EnvConfig()
DbConfig()

app.use('/api/register',AuthRoutes)
app.use(express.json({}))
const PORT = process.env.PORT
app.listen(PORT , ()=>{
    console.log(`server running at ${PORT} `);
})