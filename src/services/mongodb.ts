import mongoose from "mongoose";
export async function MongoDbConnection() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.duaram1.mongodb.net/FoodApp?retryWrites=true&w=majority`
    );
    console.log("Mongoose connection established");
  } catch (error: any) {
    console.log(error?.message);
    process.exit(1);
  }
}
