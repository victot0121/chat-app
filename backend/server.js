
import express from "express"
import dotenv from 'dotenv'
import authRoutes from "./routes/auth.router.js"
import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config()

const PORT = process.env.PORT || 5000;


const app = express()

app.use(express.json())
connectToMongoDB()


app.use("/api/auth", authRoutes)

app.listen(PORT, () => {   
    console.log(`Server running on port ${PORT}`)
})