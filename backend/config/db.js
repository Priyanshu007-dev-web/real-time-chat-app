import mongoose from "mongoose";
import "dotenv/config"

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("⚙️  Database is connected")
    } catch (error) {
        console.log("❌ Database Connection test error ==>", error)
    }
}
export default connectDb