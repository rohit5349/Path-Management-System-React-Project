import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRouter from './routes/user.js';
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
    origin: "https://path-management-system-react-project-tu3h.vercel.app", // ✅ Fixed
    methods: ["POST", "GET"],
    credentials: true 
}));

app.use(cookieParser());
app.use('/api', userRouter);

const connect = async () => {
     try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("✅ Connected to MongoDB");
     } catch (error) {
        console.error("❌ MongoDB Connection Error:", error.message);
        process.exit(1);
     }
};

app.get('/', (req, res) => {
    res.send("Hello guys!");
});

app.listen(PORT, () => {
    connect();
    console.log(`🚀 Server is running on port ${PORT}`);
});
