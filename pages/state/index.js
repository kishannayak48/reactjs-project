import React, { useState } from "react";
import MyCount from "./myCount";
function Count(){
  const [show ,setShow]=useState(true)
  
  function hendleHideAndShow(){
    setShow(!show)
  }
   return(
    <div>
< MyCount />
<MyCount/>
<center>
<button onClick={hendleHideAndShow}>{show?"show":"hide"}</button>
</center>

    </div>
   )
  
  }


export default  Count;