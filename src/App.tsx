import React, {useState} from 'react'
import './App.css'
import {Navbar} from "./components/Navbar"
import {TodoForm} from "./components/TodoForm"
import {TodoList} from "./components/TodoList"
import {ITodo} from "./interfaces";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([])

  const addHandler = (title:string) => {
    const newTodo:ITodo = {
      title: title,
      id:Date.now(),
      completed:false
    }
    setTodos(prev => [newTodo, ...prev])
  }
  const toggleHandler = (id:number) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  const removeHandler = (id:number) => {
    const shouldRemove = window.confirm('Вы точно хотите удалить ?')
    if (shouldRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }
  return ( <>
  <Navbar/>
    <div className="container">
      <h1>Test</h1>
      <TodoForm
        onAdd={addHandler}
      />
      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </div>
  </>
  )
}

export default App;
