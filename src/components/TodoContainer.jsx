import Filters from './Filters'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function TodoContainer({ addTodo, todos, deleteTask, filtersTasks }) {
  return (
    <div className="todo-container">
      <TodoForm addTodo={addTodo} />
      <Filters filtersTasks={filtersTasks} />
      <TodoList todos={todos} deleteTask={deleteTask} />
    </div>
  )
}
export default TodoContainer
