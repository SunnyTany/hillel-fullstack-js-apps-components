import {TodosPropsInterface} from '../../../types/TodosProps.interface.ts'
import {TodoItemInterface} from '../../../types/TodoItem.interface.ts'
import Todo from '../Todo/Todo.tsx'
import style from './Todos.module.css'

const Todos = ({todos = [], deleteTodo, toggleTodo }: TodosPropsInterface) => {
  return (
    <div>
      {todos.length === 0 && <h3 className={style.todosEmpty}>
        No todos to show
      </h3>}
      {todos.map((todo: TodoItemInterface) => (
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
      ))}
    </div>
  )
}

export default Todos