import { useFetch } from '../../hooks/useFetch'
import { TodoInterface } from '../../types/Todo.interface'

const Todos = () => {
  const { data: todos, error, isLoading } = useFetch<TodoInterface[]>("https://jsonplaceholder.typicode.com/todos", 10)
  
  return (
    <div>
      <h1>Todos page</h1>
      <ul>
        {isLoading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        {!!todos.length && todos.map((todo: TodoInterface) => (
          <li key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos