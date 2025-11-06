const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const API_KEY = process.env.WEATHER_API_KEY;

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>res.send("Backend Connected Successfully 🎯"));

app.get("/api/weather", async (req,res)=>{
  try{
    const city = req.query.city || "Hyderabad";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const { data } = await axios.get(url);
    res.json({
      city: data.name,
      temperature: data.main.temp,
      condition: data.weather[0].description,
      wind_speed: data.wind.speed
    });
  }catch(err){
    res.status(500).json({error:"Weather API failed"});
  }
});

app.get("/api/currency", (req,res)=>{
  const amount = parseFloat(req.query.amount || "0");
  res.json({usd:(amount*0.012).toFixed(2), eur:(amount*0.011).toFixed(2)});
});

app.get("/api/quote", (req,res)=>{
  const quotes = [
    "Believe in yourself.",
    "Dream big. Start small. Act now.",
    "Little by little, a little becomes a lot."
  ];
  res.json({quote: quotes[Math.floor(Math.random()*quotes.length)]});
});

app.listen(PORT, ()=>console.log(`✅ Server running on port ${PORT}`));
