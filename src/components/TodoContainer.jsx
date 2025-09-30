import Filters from './Filters'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function TodoContainer({ addTodo, todos, deleteTask }) {
  return (
    <div className="todo-container">
      <TodoForm addTodo={addTodo} />
      <Filters />
      <TodoList todos={todos} deleteTask={deleteTask} />
    </div>
  )
}
export default TodoContainer
