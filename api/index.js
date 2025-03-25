import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRouter from './routes/user.js';
import mongoose from "mongoose";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";
import chatbotRouter from './routes/chatbot.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const genAI =  new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.use(express.json());
app.use(cors({
    origin: [
        "https://path-management-system-react-project-tu3h.vercel.app",
        "http://localhost:3000"
    ],
    methods: ["POST", "GET"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
}));


app.use(cookieParser());
app.use('/api', userRouter);
app.use('/api/chatbot', chatbotRouter);

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
