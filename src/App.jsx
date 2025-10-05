import { useState, useEffect } from 'react'
import Header from './components/Header'
import TodoContainer from './components/TodoContainer'
import Footer from './components/Footer'

import './styles/App.css'

function App() {
  function getInitialTodos() {
    const todosSaved = localStorage.getItem('todos')
    return todosSaved ? JSON.parse(todosSaved) : []
  }

  const [todos, setTodos] = useState(getInitialTodos)
  const [currentFilter, setCurrentFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (todo) => {
    const newTodo = {
      id: Date.now(),
      task: todo,
      complete: false,
      coreatedAt: new Date(),
    }

    setTodos((todos) => [...todos, newTodo])
  }

  const deleteTask = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id))
  }

  const getFilteredTodos = () => {
    if (currentFilter === 'all') {
      return todos
    } else if (currentFilter === 'active') {
      return todos.filter((todo) => todo.complete === false)
    } else {
      return todos.filter((todo) => todo.complete === true)
    }
  }

  const onFilterChange = (stateTask) => {
    setCurrentFilter(stateTask)
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    )
  }

  const clearComplete = () => {
    setTodos(todos.filter((todo) => todo.complete !== true))
  }

  return (
    <div className="container">
      <Header />
      <TodoContainer
        addTodo={addTodo}
        todos={getFilteredTodos()}
        allTodos={todos}
        deleteTask={deleteTask}
        onFilterChange={onFilterChange}
        toggleTodo={toggleTodo}
        currentFilter={currentFilter}
        clearComplete={clearComplete}
      />
      <Footer />
    </div>
  )
}

export default App
