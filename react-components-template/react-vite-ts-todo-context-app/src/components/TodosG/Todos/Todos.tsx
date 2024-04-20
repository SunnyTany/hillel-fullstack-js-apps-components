import { useContext } from "react"
import { TodoContext } from "../TodoProvider"
import { TodoItemInterface } from "../../../types/TodoItem.interface"
import Todo from '../Todo/Todo'
import styles from './Todos.module.css'

const Todos = () => {
  const {todos} = useContext(TodoContext)
  return (
    <div>
      {todos.length === 0 && <h3 className={styles.todosEmpty}>
        No todos to show
      </h3>}
      {todos.map((todo: TodoItemInterface) => (
        <Todo key={todo.id} todo={todo}/>
      ))}
    </div>
  )
}

export default Todos