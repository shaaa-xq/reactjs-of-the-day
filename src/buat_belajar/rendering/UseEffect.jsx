import { useState, useEffect } from "react";

// import '../..index.css'

// with dependency
function WithDependency(){
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count updated: ${count}`)
  }, [count]);

  return(
    <div className="grid place-content-center mt-40">
      <button className="rounded-full bg-sky-400" onClick={() => setCount(count + 1)}>Count</button>
      <p>Count: {count}</p>
    </div>
  )
}

export default WithDependency;

// without dependency
// function WithoutDependency(){
  
//   useEffect(() => {
//     console.log('Komponen ini dirender sekali')
//   }), [];

//   return(
//     <h1>Komponen ini hanya dirender sekali!</h1>
//   );
// }

// export default WithoutDependency;

// cleanup effect
// function CleanupEffect(){
//   useEffect(() => {
//     const interval = setInterval(() => {
//       console.log("Running interval...")
//     }, 1000);

//     return() => {
//       clearInterval(interval);
//       console.log("Interval has been cleaned!")
//     }
//   }, []);

//   return(
//     <h3>Check console to see clean up effect!</h3>
//   );
// }

// export default CleanupEffect;
