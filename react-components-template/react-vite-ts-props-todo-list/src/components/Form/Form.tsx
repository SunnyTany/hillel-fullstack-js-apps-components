import { ChangeEvent, FormEvent, useState } from "react"
import { FormPropsInterface } from "../../types/FormProps.interface"
import { v4 as uuidv4 } from 'uuid'
import Button from "../Button/Button"
import style from "./Form.module.css"

const Form = ({addTodo}: FormPropsInterface) => {
  const [title, setTitle] = useState('')

  const handleSubmit = (e: FormEvent<HTMLInputElement>): void => {
    e.preventDefault()
    addTodo({
      id: uuidv4,
      title: title,
      completed: false
    })
    setTitle('')
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value
    setTitle(value)
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input 
        className={style.input}
        type="text" 
        placeholder="Enter new todo..." 
        value={title}
        onChange={handleInputChange}
      />
      <Button type="submit">Add Todo</Button>
    </form>
  )
}

export default Form