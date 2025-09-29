import { useState } from 'react'
import '../styles/TodoForm.css'

function TodoForm({ addTodo }) {
  const [task, setTask] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const inputTask = e.target.value

    setTask(inputTask)

    if (error) setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (task.trim() === '') {
      setError('Please enter a task')

      setTimeout(() => {
        setError('')
      }, 3000)
      return
    }

    addTodo(task)

    setError('')
    setTask('')
  }

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit} className="input-container">
        <input
          type="text"
          value={task}
          onChange={handleChange}
          className="todo-input"
          placeholder="What needs to be done?"
        />
        <button className="add-btn">Add</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  )
}
export default TodoForm
