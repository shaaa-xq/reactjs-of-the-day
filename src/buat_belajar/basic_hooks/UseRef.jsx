import { useRef, useState } from 'react'

export default function FocusToInput(){
  const inputRef = useRef(null)

  function handleFocus(){
    inputRef.current.focus()
  }

  return(
    <>
      <input type="text" ref={inputRef} placeholder='Type something...' />
      <button onClick={handleFocus}>Focus to Input</button>
    </>
  )
}

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

