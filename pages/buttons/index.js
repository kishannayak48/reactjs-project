import React, { useState } from "react";
//import styles from "./modul.css"
function Button(){
  const [style,setBtnColor] = useState(false);
//   const [btnColor, setBtnColor] = useState("red");

       
function btnColor(){
 setBtnColor("Green")
}

    
    return(
        <div>
        <button onClick={btnColor} >Success</button>
        <button className="button" >failur</button>
        <button className="button" >Danger</button>
        <button className="button">Warning</button>
        </div>
        
    )
}export default Button;