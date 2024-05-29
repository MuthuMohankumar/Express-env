import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './Database/config.js'
import router from './Routers/empRouter.js'

dotenv.config()

const app=express()

app.use(cors())
app.use(express.json())

const port =process.env.PORT

connectDB();

app.use('/api',router)

app.get("/",(req,res)=>{
    res.status(200).send("Welcome to our node.js app")
})

app.listen(port,()=>{
    console.log("App is running in port")
})