import mongoose from "mongoose";

const connectDb = async () => {
  try {
    //process.env.DB_URI = "mongodb://localhost:27018"
    console.log("Mongo URL = "+process.env.DB_URI);
    
    await mongoose.connect(process.env.DB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
