import { useRef, useState } from 'react';


export default function Counter() {

  let ref = useRef(0);

  const [myData, setMyData] = useState("");
  const [count, setCount] = useState(0);


  const handleChange = (e) => {
    setMyData(e.target.value)
  }
  const handleClick = () => {
    ref.current = ref.current + 1;
    // setCount(count + 1)
    setCount((ref.current)

    )
    console.log("======count=======", count)


    // alert('You clicked ' + ref.current + ' times!');
  }
  return (
    <center style={{ marginTop: "50px" }}>

      <input type="text"
        placeholder="enter the value......."
        onChange={handleChange}
      ></input>
      <p> the number of times render:</p>
      <button onClick={handleClick}>
        Click me!
      </button>
      <p>this count: {count}</p>
      <p2>my name:{myData}</p2>
    </center>
  )
}


///---------------
// let ref = useRef(0);

// function handleClick() {
//   ref.current = ref.current + 1;
//   alert('You clicked ' + ref.current + ' times!');
// }

// return (
//   <button onClick={handleClick}>
//     Click me!
//   </button>
// );

//-----------------