import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to db");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI || "");
    connection.isConnected = mongoose.connection.readyState;
    console.log("Db connected successfully");
  } catch (error) {
    console.log("Db connection failed", error);
    process.exit(1);
  }
}

export default dbConnect;
