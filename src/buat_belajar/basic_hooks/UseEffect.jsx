import { useEffect, useState } from "react";

// without dependency 
// export default function CatFacts(){
//   const [facts, setFacts] = useState('')


//   useEffect(() => {
//     fetch("https://catfact.ninja/fact")
//       .then(response => response.json())
//       .then(data => setFacts(data))
//       .catch(console.error)
//   }, [])

//   return(
//     <>
//       {/* <pre>{JSON.stringify(facts)}</pre> */}
//       <p>{facts.fact}</p>
//     </>
//   )
// }

// with dependency
// export default function CounterApp(){
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     console.log(`Kamu telah melangkah ${count} kali!`)
//   }, [count])

//   return(
//     <>
//       <button onClick={() => setCount(count + 1)}>Count</button>
//       <p>Count Total: {count}</p>
//     </>
//   )
// }

// cleanup
export default function CleanBackground(){
  useEffect(() => {
    const interval = setInterval(() => {
      document.body.style.backgroundColor = "violet"
    }, 2000)

    return() => {
      clearInterval(interval)
    }
  }, [])
}