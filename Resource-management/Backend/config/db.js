import mongoose from "mongoose";
export const connectDB = async () => {
    try {
        await mongoose.connect("");
        console.log("DB connected successfully");
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
        process.exit(1); 
    }
};



//dE1GBHuiixNgMEZF