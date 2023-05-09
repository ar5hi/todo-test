import React, { useState } from 'react'

function Test() {
  const [todos, setTodos] = useState([])
  const [ipvalue, setIpvalue] = useState('')
  const inputChangeHandler = (event) => {
   setIpvalue(event.target.value)
  }
  const addTodoHandler = () => {
     if (!ipvalue) return;
    const newTodo = {
      task: ipvalue,
      status: false,
      id: Date.now(),
    }
    setTodos((prev) => [...prev, newTodo])
    setIpvalue('')
  }
  const deleteTodoHandler = (id) => {
    setTodos(prev=> prev.filter((todo)=>todo.id !== id))
  }
  const toggleTodoHandler = (id) => {
     setTodos((prev) =>
       prev.map((todo) => {
         if (todo.id === id) {
           return { ...todo, status: !todo.status}
         }
         return todo
       })
     )
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Start typing..."
        onChange={inputChangeHandler}
        value={ipvalue}
      />
      <button onClick={addTodoHandler}>Add</button>
      <div>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <input
                type="checkbox"
                value={todo.status}
                onChange={() => toggleTodoHandler(todo.id)}
              />
              <span
                style={{
                  textDecoration: todo.status ? 'line-through' : 'none',
                }}
              >
                {todo.task}
              </span>
              <button onClick={() => deleteTodoHandler(todo.id)}>Delete</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Test
