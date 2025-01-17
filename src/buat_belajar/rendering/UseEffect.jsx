import { useState, useEffect } from "react";

// with dependency
function WithDependency(){
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count updated: ${count}`)
  }, [count]);

  return(
    <div className="di">
      <button onClick={() => setCount(count + 1)}>Count</button>
      <p>Count: {count}</p>
    </div>
  )
}

export default WithDependency;