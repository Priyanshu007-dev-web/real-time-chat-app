import mongoose from "mongoose";
import "dotenv/config"

const connectDb = async () => {
    try {
        console.log("----aa->", process.env.MONGODB_URL)
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("⚙️ Database is connected")
    } catch (error) {
        console.log("❌ Database Connection error ==>", error)
    }
}
export default connectDb