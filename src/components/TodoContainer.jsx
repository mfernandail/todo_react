import Filters from './Filters'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function TodoContainer() {
  return (
    <>
      <TodoForm />
      <Filters />
      <TodoList />
    </>
  )
}
export default TodoContainer
