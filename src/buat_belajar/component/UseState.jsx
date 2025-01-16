import { useState } from "react";

function Counter(){
  const [count, setCount] = useState(0);

  return(
    <div>
      <button onClick={() => setCount(count + 1)}>count</button>
      <p>Click: {count} times</p>
    </div>
  )
}

export default Counter;