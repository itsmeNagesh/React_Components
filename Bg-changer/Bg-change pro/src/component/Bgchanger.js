import React from 'react'
import { useState } from 'react';
export default function () {
    const[print,setPrint]=useState(null)
    const[color , setColor]=useState("grey")
   const greenc=(val)=>{
    setColor(val);
      setPrint(`It's a ${val} color`);
   }

  return (
    <div className="screen" style={{backgroundColor:color}}>
    
    <div className="container bg-white p-5"  id='f'>
      <div className="row">
        <div className="col-3">
          <button className='red' onClick={()=>(setColor("red"),setPrint(`It's a red color`) )}>red</button  >
        </div>
        <div className="col-3">
          <button  className='green' onClick={()=>greenc("green")}>green</button  >
        </div>
        <div className="col-3">
          <button  className='vv'onClick={()=> greenc("violet")}>voilet</button >
        </div>
        <div className="col-3">
          <button  className='blue'onClick={()=>greenc("pink")}>pink</button  >
        </div>
      </div>
    </div>
    <div className="co">
    <h1> {print}</h1>
    </div>
          
    
  </div>
        
    
  );
}
