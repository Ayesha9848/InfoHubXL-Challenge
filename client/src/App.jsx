import React,{useState} from "react";
import WeatherModule from "./components/WeatherModule.jsx";
import CurrencyConverter from "./components/CurrencyConverter.jsx";
import QuoteGenerator from "./components/QuoteGenerator.jsx";

export default function App(){
  const [tab,setTab]=useState("weather");
  return(
    <div className="container">
      <h2>ByteXL InfoHub 🌐</h2>
      <p className="muted">Weather • Currency • Quotes</p>
      <div className="tabs">
        <div onClick={()=>setTab("weather")} className={"tab "+(tab==="weather"?"active":"")}>Weather</div>
        <div onClick={()=>setTab("currency")} className={"tab "+(tab==="currency"?"active":"")}>Currency</div>
        <div onClick={()=>setTab("quote")} className={"tab "+(tab==="quote"?"active":"")}>Quotes</div>
      </div>
      {tab==="weather"&&<WeatherModule/>}
      {tab==="currency"&&<CurrencyConverter/>}
      {tab==="quote"&&<QuoteGenerator/>}
    </div>
  );
}
