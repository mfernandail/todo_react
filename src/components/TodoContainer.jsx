import Filters from './Filters'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function TodoContainer({
  addTodo,
  todos,
  deleteTask,
  onFilterChange,
  toggleTodo,
}) {
  return (
    <div className="todo-container">
      <TodoForm addTodo={addTodo} />
      <Filters onFilterChange={onFilterChange} />
      <TodoList todos={todos} deleteTask={deleteTask} toggleTodo={toggleTodo} />
    </div>
  )
}
export default TodoContainer
