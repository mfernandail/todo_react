import '../styles/TodoList.css'

function TodoList({ todos, deleteTask, toggleTodo, clearComplete, allTodos }) {
  return (
    <>
      <div className="todo-list">
        {todos.map((todo) => {
          return (
            <div key={todo.id} className="todo-item">
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => toggleTodo(todo.id)}
                className="todo-checkbox"
              />
              <span className="todo-text">{todo.task}</span>
              <button
                onClick={() => deleteTask(todo.id)}
                className="delete-btn"
              >
                ×
              </button>
            </div>
          )
        })}
      </div>

      <div className="stats">
        <div className="stat">
          <span className="stat-number">{allTodos.length}</span> total
        </div>
        <div className="stat">
          <span className="stat-number">
            {todos.filter((todo) => !todo.complete).length}
          </span>{' '}
          active
        </div>
        <div className="stat">
          <span className="stat-number">
            {todos.filter((todo) => todo.complete).length}
          </span>{' '}
          completed
        </div>
        <button onClick={clearComplete} className="clear-btn">
          Clear completed
        </button>
      </div>
    </>
  )
}
export default TodoList
