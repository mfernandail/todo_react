import '../styles/TodoList.css'

function TodoList({ todos }) {
  return (
    <>
      {todos.map((todo) => {
        return (
          <div className="todo-list">
            <div className="todo-item">
              <input type="checkbox" className="todo-checkbox" />
              <span className="todo-text">{todo.task}</span>
              <button className="delete-btn">×</button>
            </div>
          </div>
        )
      })}

      <div className="stats">
        <div className="stat">
          <span className="stat-number">3</span> total
        </div>
        <div className="stat">
          <span className="stat-number">2</span> active
        </div>
        <div className="stat">
          <span className="stat-number">1</span> completed
        </div>
        <button className="clear-btn">Clear completed</button>
      </div>
    </>
  )
}
export default TodoList
