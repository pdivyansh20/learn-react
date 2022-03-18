import React, { useEffect , useState} from "react";

export default function Api (){
    useEffect(() => {
      getData();
    }, [])
    const[num,setnum]=useState()
    async function  getData(){
        var response = await fetch("https://randomuser.me/api/");  
       var  data = await response.json();
       setnum(data.results[0].phone)
    }
    return <div>{num}</div>
}
