import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://nymi:1234@cluster0.qy39yo4.mongodb.net/food-del').then(()=>console.log("DB connected"));
}