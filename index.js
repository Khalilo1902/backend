import express, { Router } from "express"
import dotenv from "dotenv"
import dbConnect from "./config/dbConnect.js"
import blogRouter from "./router/blogsRouter.js"
import userRouter from "./router/userRouter.js"
import cors from "cors"

dotenv.config()


dbConnect()

const app = express()


app.use(express.json())
app.use(cors())
app.use(blogRouter)
app.use(userRouter)

const PORT = process.env.PORT || 6001
app.listen(PORT,console.log(`Server is running an PORT ${PORT}`))