import Filters from './Filters'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function TodoContainer({ addTodo, todos }) {
  return (
    <div className="todo-container">
      <TodoForm addTodo={addTodo} />
      <Filters />
      <TodoList todos={todos} />
    </div>
  )
}
export default TodoContainer
