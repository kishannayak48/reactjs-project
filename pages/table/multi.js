import React from "react";
let table=0;

for(let i=1;i<=10;i++){
    console.log(i)
    table += 5+" X "+i+" = "+(5*i);
}
function Multi(){
    return(
        <>
      <div>{table}</div>
      <button></button>
     
      </>
    )

}export default Multi;