import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import TodoContainer from './components/TodoContainer'
import './styles/App.css'

function App() {
  const [todos, setTodos] = useState([])

  console.log(todos)

  const addTodo = (todo) => {
    const newTodo = {
      id: Date.now(),
      task: todo,
      complete: false,
      coreatedAt: new Date(),
    }

    setTodos((todos) => [...todos, newTodo])
  }

  return (
    <div className="container">
      <Header />
      <TodoContainer addTodo={addTodo} todos={todos} />
      <Footer />
    </div>
  )
}

export default App
