import { useState, useReducer } from "react";

// function counterReducer(state, action){
//   switch (action.type) {
//     case "INCREMENT":
//       return {count: state.count + 1}
//     case "DECREMENT":
//       return {count: state.count - 1}
//     case "RESET":
//       return {count: 0}
//     default:
//       return state
//   }
// }

// export default function CounterWithReducer(){
//   const [state, dispatch] = useReducer(counterReducer, {count: 0})

//   return(
//     <>
//       <p>Count: {state.count}</p>
//       <button onClick={() => dispatch({type: "DECREMENT"})}>-</button>
//       <button onClick={() => dispatch({type: "INCREMENT"})}>+</button>
//       <button onClick={() => dispatch({type: "RESET"})}>Reset</button>
//     </>
//   )
// }


function TodoReducer(state, action){
  switch (action.type) {
    case "ADD_TODO":
      return [...state, {id: Date.now(), text: action.payload}]
    case "REMOVE_TODO":
      return state.filter((task) => task.id != action.payload)
    default:
      return state
  }
}

// export default function TodoReducerApp(){
//   const [newTask, setNewTask] = useState('')
//   const [tasks, dispatch] = useReducer(TodoReducer, [])

//   function handleAddTask(){
//     if(newTask.trim() != ""){
//       dispatch({type: "ADD_TODO", payload: newTask})
//     } else{
//       alert("Task can't be blank")
//     }
//   }

//   return(
//     <>
//       <input 
//         type="text" 
//         value={newTask}
//         onChange={(e) => 
//           setNewTask(e.target.value)
//         }
//       />
//       <button onClick={handleAddTask}>Add Task</button>
//       <ul>
//         {tasks.map((task) => (
//           <li key={task.id}>
//             {task.text}{" "}
//             <button 
//               onClick={() => dispatch({type: "REMOVE_TODO", payload: task.id})}
//             >Delete Task</button>
//           </li>
//         ))}
//       </ul>
//     </>
//   )
// }

const cartData = {
  cart: [],
  total: 0
}

function cartReducer(state, action){
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
        total: state.total + action.payload.price
      }
    case "REMOVE_FROM_CART":
      const itemToRemove = state.cart.find((item) => item.id === action.payload)
      return{
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
        total: state.total - itemToRemove.price
      }
    default:
      return state
  }
}

export default function ShoppingApp(){
  const [state, dispatch] = useReducer(cartReducer, cartData)
  const [addNewProduct, setAddNewProduct] = useState('')
  const [addNewPrice, setAddNewPrice] = useState('')

  function handleAddProduct(){
    if(!addNewProduct || !addNewPrice) return
    const newItem = {
      id: Date.now(),
      name: addNewProduct,
      price: parseInt(addNewPrice)
    }
    dispatch({type: "ADD_TO_CART", payload: newItem})
    setAddNewProduct('')
    setAddNewPrice('')
  }

  return(
    <>
      <input 
        type="text" 
        value={addNewProduct}
        placeholder="Add product"
        onChange={(e) => setAddNewProduct(e.target.value)}
      />
      <br />
      <input 
        type="text" 
        value={addNewPrice}
        placeholder="Add price"
        onChange={(e) => setAddNewPrice(e.target.value)}
      />
      <button onClick={handleAddProduct}>Add To Cart</button>
      <ul>
        {state.cart.map((item) => (
          <li key={item.id}>
            {item.name} - Rp.{item.price}{"  "}
            <button onClick={() => 
              dispatch({type: "REMOVE_FROM_CART", payload: item.id})} 
            >Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: Rp.{state.total}</p>
    </>
  )
}