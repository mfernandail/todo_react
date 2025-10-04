import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import TodoContainer from './components/TodoContainer'
import './styles/App.css'
import { useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : []
  })

  const [filter, setFilter] = useState([])

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

  const onFilterChange = (stateTask) => {
    console.log(stateTask)
    if (stateTask === null) {
      setFilter()
    } else {
      setFilter(todos.filter((todo) => todo.complete === stateTask))
    }
    console.log(filter)
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    )
  }

  return (
    <div className="container">
      <Header />
      <TodoContainer
        addTodo={addTodo}
        todos={todos}
        deleteTask={deleteTask}
        onFilterChange={onFilterChange}
        toggleTodo={toggleTodo}
      />
      <Footer />
    </div>
  )
}

export default App
