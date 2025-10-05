import Filters from './Filters'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function TodoContainer({
  addTodo,
  todos,
  deleteTask,
  onFilterChange,
  toggleTodo,
  currentFilter,
}) {
  return (
    <div className="todo-container">
      <TodoForm addTodo={addTodo} />
      <Filters onFilterChange={onFilterChange} currentFilter={currentFilter} />
      <TodoList todos={todos} deleteTask={deleteTask} toggleTodo={toggleTodo} />
    </div>
  )
}
export default TodoContainer
