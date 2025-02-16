import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors({
  origin: "https://path-management-system-react-project-ecz3.vercel.app", 
  methods: ["GET", "POST"],
  credentials: true, 
}));

app.use(express.json());

const geminiApiKey = process.env.GEMINI_API_KEY; // ✅ FIXED

if (!geminiApiKey) {
  console.error("❌ Google Maps API key is missing. Check your .env file.");
  process.exit(1);
}

app.get('/api/v1/shortest-path', async (req, res) => {
  const { source, destination } = req.query;

  if (!source || !destination) {
    return res.status(400).json({ error: '❌ Source and destination are required.' });
  }

  try {
    const parsedSource = JSON.parse(source);
    const parsedDestination = JSON.parse(destination);

    // ✅ FIXED: Use Google Maps API for directions
    const response = await axios.get('https://maps.googleapis.com/maps/api/directions/json', {
      params: {
        origin: `${parsedSource.lat},${parsedSource.lng}`,
        destination: `${parsedDestination.lat},${parsedDestination.lng}`,
        key: geminiApiKey,
      },
    });

    if (!response.data.routes.length) {
      return res.status(404).json({ error: '❌ No routes found.' });
    }

    return res.json(response.data);
  } catch (error) {
    console.error('❌ API Error:', error.response?.data || error.message);
    return res.status(error.response?.status || 500).json({
      error: '❌ Error fetching shortest path.',
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
