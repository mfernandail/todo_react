import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import TodoContainer from './components/TodoContainer'
import './styles/App.css'

function App() {
  const [todos, setTodos] = useState([])

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
    let currentFilter

    if (stateTask === null) {
      currentFilter = todos
    } else {
      currentFilter = todos.filter((todo) => todo.complete === stateTask)
    }
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
