import { useState } from 'react'
import Title from './components/Title/Title'
import Form from './components/Form/Form'
import Actions from './components/Actions/Actions'
import Todos from './components/TodosG/Todos/Todos'
import { TodoItemInterface } from './types/TodoItem.interface'
import { MOCK_TODOS } from './mock-todos'
import './App.css'

function App() {
  const [todos, setTodos] = useState<TodoItemInterface[]>(MOCK_TODOS)

  const addTodoHandler = (todo: TodoItemInterface): void => {
    setTodos([...todos, todo])
  }

  const deleteTodoHandler = (id: string): void => {
    setTodos(todos.filter(todo => todo.id!== id))
  }

  const toggleTodoHandler = (id: string): void => {
    setTodos(todos.map((todo: TodoItemInterface) =>
      (todo.id === id ? {...todo, completed: !todo.completed} : todo)
    ))
  }

  const deleteAllTodosHandler = (): void => {
    setTodos([])
  }

  const clearCompletedTodosHandler = (): void => {
    setTodos(todos.filter((todo: TodoItemInterface) => !todo.completed))
  }

  const completedTodosCount: number = todos.filter((todo: TodoItemInterface) => todo.completed).length

  console.log(`Completed todos: ${completedTodosCount}`)

  return (
    <div className="container">
      <Title />
      <Form addTodo={addTodoHandler} />
      { !!todos.length && <Actions deleteAllTodos={deleteAllTodosHandler} clearCompletedTodos={clearCompletedTodosHandler} completedTodosExist={!!completedTodosCount} /> }
      <Todos todos={todos} deleteTodo={deleteTodoHandler} toggleTodo={toggleTodoHandler} />
      { completedTodosCount > 0 && <p className='todosMessage'>You have completed {completedTodosCount} {completedTodosCount > 1 ?  "todos" : "todo"}</p> }
    </div>
  )
}

export default App
