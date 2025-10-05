import Filters from './Filters'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function TodoContainer({
  addTodo,
  todos,
  allTodos,
  deleteTask,
  onFilterChange,
  toggleTodo,
  currentFilter,
  clearComplete,
}) {
  return (
    <div className="todo-container">
      <TodoForm addTodo={addTodo} />
      <Filters onFilterChange={onFilterChange} currentFilter={currentFilter} />
      <TodoList
        todos={todos}
        deleteTask={deleteTask}
        toggleTodo={toggleTodo}
        currentFilter={currentFilter}
        clearComplete={clearComplete}
        allTodos={allTodos}
      />
    </div>
  )
}
export default TodoContainer
