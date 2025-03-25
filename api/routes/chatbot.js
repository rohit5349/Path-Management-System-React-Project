import express from "express";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();
const router = express.Router();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

router.post("/", async (req, res) => {
    try {
        const userMessage = req.body.message;
        if (!userMessage) {
            return res.status(400).json({ error: "Message is required" });
        }

        // ✅ Correct Gemini API Request Format
        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro-001:generateContent?key=${GEMINI_API_KEY}`,
            {
                contents: [{ role: "user", parts: [{ text: userMessage }] }]
            },
            {
                headers: { "Content-Type": "application/json" }
            }
        );

        // ✅ Extract response properly
        const botReply = response.data.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't understand that.";

        res.json({ reply: botReply });

    } catch (error) {
        console.error("Chatbot Error: ", error.response?.data || error.message);
        res.status(500).json({ error: "Something went wrong!" });
    }
});

export default router;
