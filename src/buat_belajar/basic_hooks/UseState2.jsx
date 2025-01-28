import { useState } from 'react'

// export default function InputName(){
//   const [name, setName] = useState('')

//   function handleInput(e){
//     setName(e.target.value)
//   }

//   return(
//     <>
//       <input type="text" onChange={handleInput} />
//       {/* <button onClick={() => {
//         setName('')
//       }}>Input</button> */}
//       <p>Nama anda: {name}</p>
//     </>
//   )
// }

// export default function Counter(){
//   const [count, setCount] = useState(0)

//   function increment(){
//     setCount(count + 1)
//   }

//   function decrement(){
//     setCount(count - 1)
//   }

//   return(
//     <>
//       <p>Your Counting now: {count}</p>
//       <button onClick={decrement}>Decrease</button>
//       <button onClick={increment}>Increase</button>
//     </>
//   )
// }

// export default function ShowDetail(){
//   const [detail, setDetail] = useState(false)

//   function showDetailToggle(){
//     setDetail(!detail)
//   }

//   return(
//     <>
//       <button onClick={showDetailToggle}>
//         {detail ? "Hide Detail" : "Show Detail"} 
//       </button>
//       {detail && (
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//       )}
//     </>
//   )
// }

// export default function Form(){
//   const [form, setForm] = useState({
//     name: 'a',
//     email: 'a',
//   })

//   // function inputData(){
    
//   // }

//   return(
//     <>
//       <label>
//         Name: 
//         <input 
//           type="text" 
//           value={form.name}
//           onChange={e => {
//             setForm({
//               ...form, name: e.target.value
//             })
//           }}
//         />
//       </label>
//       <br />
//       <label>
//         Email: 
//         <input 
//           type="email" 
//           value={form.email}
//           onChange={e => {
//             setForm({
//               ...form, email: e.target.value
//             })
//           }}
//         />
//       </label>
//       <p>
//         {form.name}{' '}
//         {form.email}
//       </p>
//     </>
//   )
// }

export default function ToDo(){
  const [todo, setTodo] = useState('')
  const [todoArray, setTodoArray] = useState([])
  let nextId = 0

  function addTodo(){
    setTodoArray([
      ...todoArray,
      {id: nextId++, todo: todo}
    ])
  }

  return(
    <>
      <div>
        <input 
          type="text" 
          onChange={e => {
            setTodo(e.target.value)
          }}
        />
        <button onClick={addTodo}>
          Add Task
        </button>
      </div>
      <ul>
        {todoArray.map(task => (
          <li key={task.id}>{task.todo}</li>
        ))}
      </ul>
    </>
  )
}

// export default function StudentsData(){
//   const [student, setStudent]
// }