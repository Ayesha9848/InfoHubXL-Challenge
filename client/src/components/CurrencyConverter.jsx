import React,{useState} from "react";
import axios from "axios";

export default function CurrencyConverter(){
  const [amount,setAmount]=useState("");
  const [res,setRes]=useState(null);
  const [error,setError]=useState("");

  const convert=async()=>{
    try{
      const r=await axios.get(`/api/currency?amount=${amount}`);
      setRes(r.data);
      setError("");
    }catch{
      setError("Conversion failed");
    }
  };

  return(
    <div className="card">
      <h3>Currency Converter</h3>
      <input type="number" value={amount} onChange={e=>setAmount(e.target.value)} placeholder="INR Amount"/>
      <button onClick={convert}>Convert</button>
      {error&&<p className="error">{error}</p>}
      {res&&(
        <div className="muted">
          <p>USD: {res.usd}</p>
          <p>EUR: {res.eur}</p>
        </div>
      )}
    </div>
  );
}
