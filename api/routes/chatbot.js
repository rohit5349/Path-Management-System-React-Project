import express from "express";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();
const router = express.Router();

const OPENAI_API_KEY = process.env.OPEN_API_KEY;

router.post("/", async (req, res) => {
    try {
        const userMessage = req.body.message;
        if (!userMessage) {
            return res.status(400).json({ error: "Message is required" });
        }

        const response = await axios.post(
             "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-3.5-turbo", 
                messages: [{ role: "user", content: userMessage }],
                temperature: 0.7
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${OPENAI_API_KEY}`
                }
            }
        );

        const botReply = response.data.choices?.[0]?.message?.content || "I couldn't understand that.";

        res.json({ reply: botReply });

    } catch (error) {
        console.error("Chatbot Error: ", error.response?.data || error.message);
        res.status(500).json({ error: "Something went wrong!" });
    }
});

export default router;
