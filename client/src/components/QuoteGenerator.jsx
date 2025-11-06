import React,{useState,useEffect} from "react";
import axios from "axios";

export default function QuoteGenerator(){
  const [quote,setQuote]=useState("");
  const [loading,setLoading]=useState(true);

  const fetchQuote=()=>{
    setLoading(true);
    axios.get("/api/quote")
      .then(r=>setQuote(r.data.quote))
      .finally(()=>setLoading(false));
  };

  useEffect(()=>{fetchQuote();},[]);

  return(
    <div className="card">
      <h3>Motivational Quote</h3>
      {loading?<p className="muted">Loading...</p>:<p style={{fontStyle:"italic"}}>"{quote}"</p>}
      <button onClick={fetchQuote}>New Quote</button>
    </div>
  );
}
