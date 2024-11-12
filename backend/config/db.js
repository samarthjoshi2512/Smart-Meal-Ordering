import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://samarthjoshi81:samsjj2512@cluster0.u3sca.mongodb.net/Projects').then(()=>console.log("DB Connected"));
}





