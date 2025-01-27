import { useState } from "react";

function TaskList({
  todos,
  changeTodo,
  deleteTodo
}){
  return(
    <ul>
    {todos.map(todo => (
      <li key={todo.id}>
        <Task 
          todo={todo}
          onChange={changeTodo}
          onDelete={deleteTodo}
        />
      </li>
      ))}
    </ul>
  )
}

function Task({todo, onChange, onDelete}){
  const [isEditing, setIsEditing] = useState(false)
  let todoContent

  if(isEditing){
    todoContent = (
      <>
        <input 
          type="text" 
          value={todo.title}
          onChange={e => {
            onChange({...todo, title: e.target.value})
          }}/>
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    )
  } else{
    todoContent = (
      <>
        {todo.title}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    )
  }

  return(
    <label>
      <input 
        type="checkbox" 
        checked={todo.done}
        onChange={e => {
          onChange({...todo, done: e.target.checked})
        }}
      />
      {todoContent}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </label>
  )
}

function AddTodo({ onAddTodo }){
  const [title, setTitle] = useState('')

  return(
    <>
      <input 
        type="text"
        placeholder="Add todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => {
        setTitle('');
        onAddTodo(title);
      }}>Add</button>
    </>
  )
}

let nextId = 2
const initialTodos = [
  {id: 0, title: 'Beli dimsum', done: false},
  {id: 1, title: 'Bayar KKL', done: true}
]

export default function TodoApp(){
  const [todos, setTodos] = useState(initialTodos)

  function handleAddTodo(title){
    setTodos([...todos,
      {
        id: nextId++,
        title: title,
        done: false
      }
    ])
  }

  function handleChangeTodo(nextTodo){
    setTodos(todos.map(t => {
      if(t.id === nextTodo.id){
        return nextTodo
      } else{
        return t
      }
    }))
  }

  function handleDeleteTodo(todoId){
    setTodos(
      todos.filter(t => t.id !== todoId)
    )
  }

  return(
    <>
      <AddTodo 
        onAddTodo={handleAddTodo}
      />
      <TaskList 
        todos={todos}
        changeTodo={handleChangeTodo}
        deleteTodo={handleDeleteTodo}
      />
    </>
  )
}