import Filters from './Filters'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function TodoContainer() {
  return (
    <div className="todo-container">
      <TodoForm />
      <Filters />
      <TodoList />
    </div>
  )
}
export default TodoContainer
