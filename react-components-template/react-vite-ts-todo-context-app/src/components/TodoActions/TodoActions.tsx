import { useContext } from "react"
import { RiCheckboxCircleLine, RiDeleteBin5Fill } from "react-icons/ri"
import { TodoContext } from "../TodosG/TodoProvider"
import { TodoItemInterface } from "../../types/TodoItem.interface"
import Button from "../Button/Button"
import styles from './TodoActions.module.css'

const Actions = () => {
  const { todos, deleteAllTodos, clearCompletedTodos } = useContext(TodoContext)
  const completedTodosExist: boolean = todos.some((todo: TodoItemInterface) => todo.completed)
  console.log(todos)
  return ( 
    <>
      { todos.length > 0 && (
        <div className={styles.actionsWrap}>
          <Button 
            className={styles.actionBtn} 
            onClick={() => deleteAllTodos()} 
            title="Delete all Todos"
            disabled={todos.length <= 0}
          >
            <RiDeleteBin5Fill />
          </Button>
          <Button 
            className={styles.actionBtn} 
            onClick={() => clearCompletedTodos()} 
            title="Clear completed Todos" 
            disabled={!completedTodosExist}
          >
            <RiCheckboxCircleLine/>
          </Button>
        </div>
      )}
    </>
  )
}

export default Actions