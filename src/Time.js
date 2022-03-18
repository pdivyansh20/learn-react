import React, { useState } from "react";
export default function Time(){
     let t = new Date().toLocaleTimeString();
     setInterval(() => {
          let t = new Date().toLocaleTimeString();
          setstate(t)
     }, 1000);
     const [time , setstate]=useState(t);
     return <> <div>{time} </div></>
}