import { useState } from 'react'
import '../styles/TodoForm.css'

function TodoForm() {
  const [task, setTask] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const inputTask = e.target.value

    setTask(inputTask)

    if (inputTask.trim() === '') {
      setError('Please enter a task')
    } else {
      setError('')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (task.trim() === '') {
      setError('Please enter a task')
      return
    }

    console.log(task)
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
