import {useState,useEffect, useState, useEffect} from 'react';

function App() {
  const [count,setCount]=useState(0);

useEffect(()=>{
  const val=localStorage.getItem("count");
  if(val){
    setCount(parseInt(val));
  }
},[])

useEffect(()=>{
  if(count>0){
    localStorage.setItem("count",count);
  }
},[count])



  return (
    <>
    <h1>counter</h1> 
    <h2>count:{count}</h2>
    <button onClick={()=>setCount(count+1)}>increase</button>      
    </>
  );
}

export default App;
