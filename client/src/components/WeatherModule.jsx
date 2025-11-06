import React,{useState,useEffect} from "react";
import axios from "axios";

export default function WeatherModule(){
  const [city,setCity]=useState("Hyderabad");
  const [data,setData]=useState(null);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState("");

  const fetchWeather=async(c)=>{
    try{
      setLoading(true);setError("");
      const res=await axios.get(`/api/weather?city=${c}`);
      setData(res.data);
    }catch{
      setError("Weather API failed");
    }finally{
      setLoading(false);
    }
  };

  useEffect(()=>{fetchWeather(city);},[]);

  return(
    <div className="card">
      <h3>Weather</h3>
      <input value={city} onChange={e=>setCity(e.target.value)} placeholder="Enter city"/>
      <button onClick={()=>fetchWeather(city)}>Get Weather</button>
      {loading&&<p className="muted">Loading...</p>}
      {error&&<p className="error">{error}</p>}
      {data&&!error&&!loading&&(
        <div className="muted">
          <p>City: {data.city}</p>
          <p>Temperature: {data.temperature}°C</p>
          <p>Condition: {data.condition}</p>
          <p>Wind Speed: {data.wind_speed} m/s</p>
        </div>
      )}
    </div>
  );
}
