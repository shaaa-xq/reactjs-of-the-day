import { useState, useCallback } from "react";

export default function CounterCallback(){
  const [count, setCount] = useState(0)

  const increment = useCallback(() => {
    setCount(count + 1)
  })

  const reset = useCallback(() => {
    setCount(0)
  })

  return(
    <>
      <p>Count: {count}</p>
      <button onClick={increment}>Click to Count</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

// const names = [
//   {id: 0, name: "Kaguwir"},
//   {id: 1, name: "Maji"},
//   {id: 2, name: "Noya (Alm)"},
//   {id: 3, name: "Jerry"},
//   {id: 4, name: "Ubi"},
//   {id: 5, name: "Zero"},
//   {id: 6, name: "Kirman"},
//   {id: 7, name: "Ikkan"},
//   {id: 8, name: "Awan"},
//   {id: 9, name: "Narendra"},
// ]

// export default function SearchName(){
//   const [searchText, setSearchText] = useState('')
//   const [filteredNames, setFilteredNames] = useState(names)

//   const handleChange = useCallback((e) => {
//     const searchValue = e.target.value
//     setSearchText(searchValue)

//     const filter = names.filter((name) =>
//       name.name.toLowerCase().includes(searchValue.toLowerCase())
//     )

//     setFilteredNames(filter)
//   })

//   return(
//     <>
//       <input 
//         type="text"
//         onChange={handleChange}
//         value={searchText}
//       />
//       <ul>
//         {filteredNames.map((name) => (
//           <li key={name.id}>{name.name}</li>
//         ))}
//       </ul>
//     </>
//   )
// }

// export default function MultipleCounter(){
//   const [count, setCount] = useState(0)

//   const increment = useCallback(() => {
//     setCount(count + 1)
//   })

//   const decrement = useCallback(() => {
//     setCount(count - 1)
//   })

//   const multiple = useCallback(() => {
//     setCount(count * 2)
//   })

//   return(
//     <>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increase</button>
//       <button onClick={decrement}>Decrease</button>
//       <button onClick={multiple}>Multiple</button>
//     </>
//   )
// }