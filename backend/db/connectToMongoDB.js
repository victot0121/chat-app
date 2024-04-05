import Mongoose from "mongoose";


const connectToMongoDB = async () => {
    try {
        await Mongoose.connect(process.env.MONGO_DB_URI)
        console.log("connect to mongoDB")
    } catch (error) {
        console.log("Error connecting to MongoDB", error.message)
    }
}



export default connectToMongoDB