import React from "react";
import Data from "./Data"
import Print from "./Print";
function Fun (Val){
  return <Print
                 Key={Val.id}
                 Name={Val.name} 
                Gender = {Val.gender}
          />
}
 export  default function Mapping(){
 return Data.map(Fun)
}