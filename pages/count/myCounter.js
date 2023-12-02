import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <center style={{marginTop:"120px"}}>
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
    </center>
  );
}export default Counter;
