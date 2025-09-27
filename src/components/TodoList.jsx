import '../styles/TodoList.css'

function TodoList() {
  return (
    <>
      <div className="todo-list">
        <div className="todo-item">
          <input type="checkbox" className="todo-checkbox" />
          <span className="todo-text">Learn React fundamentals</span>
          <button className="delete-btn">×</button>
        </div>

        <div className="todo-item">
          <input type="checkbox" className="todo-checkbox" />
          <span className="todo-text completed">
            Setup development environment
          </span>
          <button className="delete-btn">×</button>
        </div>

        <div className="todo-item">
          <input type="checkbox" className="todo-checkbox" />
          <span className="todo-text">Build todo app with React</span>
          <button className="delete-btn">×</button>
        </div>
      </div>

      <div className="empty-state hide">
        <div className="empty-state-icon">-</div>
        <p>No tasks yet. Add one above to get started!</p>
      </div>

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
