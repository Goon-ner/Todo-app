import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import './App.css'
import TodoForm from './components/Todo/TodoForm'
import TodoList from './components/Todo/TodoList'
import TodosButtons from './components/Todo/TodosButtons'

function App() {
  const [todo, setTodo] = useState([])

  const todoChange = (text) => {
    const newTodo = {
      id: uuidv4(),
      text: text,
      isCompleted: false,
    }
    setTodo([...todo, newTodo])
  }

  const deleteTodo = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodo(
      todo.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      })
    )
  }

  const resetTodos = () => {
    setTodo([])
  }
  const deleteTodos = () => {
    setTodo(todo.filter((todo) => todo.isCompleted === false))
  }

  const completedTodosCount = todo.filter(
    (todo) => todo.isCompleted === true
  ).length

  console.log(completedTodosCount)

  return (
    <div className="App">
      <h1> To do App</h1>
      <TodoForm addChange={todoChange} />
      {!!todo.length && (
        <TodosButtons
          completedTodosExist={!!completedTodosCount}
          resetTodos={resetTodos}
          deleteTodos={deleteTodos}
        />
      )}
      <TodoList
        addTodo={todo}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
      {completedTodosCount > 0 && (
        <h2>{`You have complited ${completedTodosCount} ${
          completedTodosCount > 1 ? 'todos' : 'todo'
        } `}</h2>
      )}
    </div>
  )
}

export default App
