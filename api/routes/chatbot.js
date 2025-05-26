import express from "express";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();
const router = express.Router();

const API_KEY = process.env.GEMINI_API_KEY;

router.post("/", async (req, res) => {
     if(!req.body){
        return res.status(400).send("No Request body");
     }
     console.log("req.body" , req.body);

     try{
        const api_url  =   `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;
        const postData = {
                 "contents" : [
                    {
                       "role": "user",
                       "parts":[
                           {
                               "text" : req.body?.text
                           }
                       ]
                    }
                 ]
             
        };

        const response = await axios.post(api_url , postData , {
              headers : {
                 'Content-Type' : 'application/json'
              }
        });

        const reply = response.data?.candidates?.[0]?.content?.[0].parts?.[0]?.text || "No responce";
        res.json({reply});
       
     } catch(error) {
         console.error("Axios Error:", error.response?.data || error.message || error);
         res.status(500).send("Failed to fetch the response");
     }
});

export default router;
