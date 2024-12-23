import mongoose from "mongoose";

const username = encodeURIComponent("adrian");
const password = encodeURIComponent("drixar");


export const connectMongoDB = async () => {
  try {

    mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.lf9si.mongodb.net/`)
    console.log("Mongo DB Connected");
  } catch (error) {
    console.log(error);
  }
}