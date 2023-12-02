import { useState } from "react";
import Button from "../buttons";


function MyCount(){
    // const(show)=props;
    const [counter,setCounter]=useState(0)
    // const[show,setShow]=useState(true)
function increasCountValue(){
    setCounter(counter +1)
}
function isEvenOrOdd(){
    if(counter % 2 ==0){
        return "Even";
    }
    return"Odd";
} 
    return(
  <center>
      <h1>
          <p>counter value: {counter}</p>
      </h1>
      {show &&
        <p>
          In Even and Odd{isEvenOrOdd}
        </p>
}
      <p>
          <button onClick={increasCountValue} >Click me </button>
      </p>
  </center>
    );

}export default MyCount;