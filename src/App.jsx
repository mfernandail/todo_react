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

  const filtersTasks = (stateTask) => {
    console.log(stateTask)
    if (filtersTasks !== null) {
      setTodos((todos) => todos.filter((todo) => todo.complete === stateTask))
    }
  }

  return (
    <div className="container">
      <Header />
      <TodoContainer
        addTodo={addTodo}
        todos={todos}
        deleteTask={deleteTask}
        filtersTasks={filtersTasks}
      />
      <Footer />
    </div>
  )
}

export default App
