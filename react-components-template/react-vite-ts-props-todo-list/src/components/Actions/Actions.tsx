import { ActionsPropsInterface } from "../../types/ActionsProps.interface"
import Button from "../Button/Button"
import { RiDeleteBin5Fill, RiCheckboxCircleLine } from "react-icons/ri"
import style from './Actions.module.css'

const Actions = ({deleteAllTodos, clearCompletedTodos, completedTodosExist}: ActionsPropsInterface) => {

  return (
    <div className={style.actionsWrap} >
      <Button className={style.actionBtn} onClick={deleteAllTodos} title="Delete all Todos">
        <RiDeleteBin5Fill />
      </Button>
      <Button className={style.actionBtn} onClick={clearCompletedTodos} title="Clear completed Todos" disabled={!completedTodosExist}>
        <RiCheckboxCircleLine/>
      </Button>
    </div>
  )

}

export default Actions