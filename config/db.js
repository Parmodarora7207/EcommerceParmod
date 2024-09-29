import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Connected to MongoDB: ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.error(`Error in MongoDB connection: ${error.message}`.bgRed.white);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
