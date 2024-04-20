import { useContext, useState, FormEvent, ChangeEvent } from "react"
import { TodoContext } from "../TodosG/TodoProvider"
import { v4 as uuidv4 } from 'uuid'
import Button from '../Button/Button'
import styles from './Form.module.css'

const Form = () => {
  const [title, setTitle] = useState('')
  const { addTodo } = useContext(TodoContext)

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault()
    addTodo({
      id: uuidv4(),
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
    <form className={styles.form} onSubmit={handleSubmit}>
      <input 
        className={styles.input}
        type="text" 
        placeholder="Enter new todo..." 
        value={title}
        onChange={handleInputChange}
      />
      <Button type="submit" title="Submit form" disabled={!title.trim()}>Add Todo</Button>
    </form>
  )
}

export default Form