import '../styles/TodoForm.css'

function TodoForm() {
  return (
    <div className="todo-form">
      <div className="input-container">
        <input
          type="text"
          className="todo-input"
          placeholder="What needs to be done?"
        />
        <button className="add-btn">Add</button>
      </div>
    </div>
  )
}
export default TodoForm
