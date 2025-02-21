import mongoose from "mongoose";

if (!process.env.DB_URI) {
  console.log("Please Provide valid variable in .env.local");
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, { dbName: process.env.DB_NAME });
    console.log("DB Connected Successfully!");
  } catch (err) {
    console.log(`Error Connecting to the DB ${err}`);
    process.exit(1);
  }
};

export default connectToDatabase;
