import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI!);
      console.log("Database Connected");
    }
  } catch (error) {
    console.log("Error connecting to database: ", error);
  }
};

export default connectDB;