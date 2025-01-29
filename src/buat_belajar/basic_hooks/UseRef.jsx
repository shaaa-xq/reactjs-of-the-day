import { useRef, useState } from 'react'

// export default function FocusToInput(){
//   const inputRef = useRef(null)

//   function handleFocus(){
//     inputRef.current.focus()
//   }

//   return(
//     <>
//       <input type="text" ref={inputRef} placeholder='Type something...' />
//       <button onClick={handleFocus}>Focus to Input</button>
//     </>
//   )
// }

// export default function SaveValue(){
//   const previousNumberRef = useRef(0)
//   const [currentNumber, setCurrentNumber] = useState(0)

//   function increment(){
//     setCurrentNumber(currentNumber + 1)
    
//   }

//   function decrement(){
//     setCurrentNumber(currentNumber - 1)
//   }

//   return(
//     <>
//       <p>Current number: {currentNumber}</p>
//       <p>Previous number: {previousNumberRef.current = currentNumber - 1}</p>
//       <button onClick={decrement}>-</button>
//       <button onClick={increment}>+</button>
//     </>
//   )
// }

export default function Stopwatch(){
  const [now, setNow] = useState(null)
  const [startTime, setStartTime] = useState(null)
  const intervalRef = useRef(null)

  function handleStart(){
    setStartTime(Date.now())
    setNow(Date.now())

    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setNow(Date.now())
    }, 10)
  }

  function handleStop(){
    clearInterval(intervalRef.current)
  }

  function handleReset(){
    setStartTime(null)
    setNow(null)
  }

  let times = 0
  if(now != null && startTime != null){
    times = (now - startTime) / 1000
  }

  return(
    <>
      <h1 ref={intervalRef}>{times.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}