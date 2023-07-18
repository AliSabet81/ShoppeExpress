import express from "express";
import { EnvConfig } from "./configs/index.mjs";
import { DbConfig } from "./configs/db/index.mjs";
import { AuthRoutes } from "./routes/index.mjs";
import cors from "cors";
const app = express()

EnvConfig()
DbConfig()

app.use(cors())
app.use(express.json({}))
app.use('/api/auth/',AuthRoutes)
const PORT = process.env.PORT
app.listen(PORT , ()=>{
    console.log(`server running at ${PORT} `);
})