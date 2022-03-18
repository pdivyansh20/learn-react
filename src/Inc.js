import React ,{useState} from "react";
export default function Inc(){
    const Ch = ()=> {
    setstate(  state+3)
    }
    const [state , setstate] = useState(0);
    return  <><div> {state} </div>
     <button onClick={Ch}>Click</button></>    
};