import { TodoPropsInterface } from '../../../types/TodoProps.interface.ts'
import { RiTodoFill, RiDeleteBinLine } from "react-icons/ri"
import { FaCheck } from "react-icons/fa6"	
import './Todo.css'

const Todo = ({todo : { id, title, completed }, deleteTodo, toggleTodo } : TodoPropsInterface) => {
  return (
    <div className={`todo${ completed ? ' todo--completed' : ''}`} >
      <div className="todoGroup">
        <RiTodoFill className="todoIcon" />
        <h2 className="todoTitle">
          {title.toUpperCase()}
        </h2>
      </div>
      <div className="todoGroup">
        <div className="todoCompleted">
          {completed.toString()}
        </div>
        <RiDeleteBinLine className="todoDeleteBtn" onClick={() => deleteTodo(id)} />
        <FaCheck className="todoCheckBtn" onClick={() => toggleTodo(id)}/>
      </div>
    </div>
  )
}

export default Todo