import { createContext, useState } from'react'
import { TodoContextInterface } from '../../types/TodoContext.interface'
import { initialState } from '../../context/initialState'
import { TodoProviderPropsInterface } from '../../types/TodoProviderProps.interface'
import { TodoItemInterface } from '../../types/TodoItem.interface'
import { MOCK_TODOS } from '../../mock-todos'
export const TodoContext = createContext<TodoContextInterface>(initialState)

const TodoProvider = ({children}: TodoProviderPropsInterface) => {
  const [todos, setTodos] = useState<TodoItemInterface[]>(MOCK_TODOS)

  const addTodo = (todo: TodoItemInterface): void => {
    setTodos([...todos, todo])
  }

  const deleteTodo = (id: string): void => {
    setTodos(todos.filter(todo => todo.id!== id))
  }
  
  const toggleTodo = (id: string): void => {
    setTodos(todos.map((todo: TodoItemInterface) =>
      (todo.id === id ? 
        {...todo, completed: !(todo.completed)} 
        : todo)
    ))
  }

  const deleteAllTodos = (): void => {
    setTodos([])
  }

  const clearCompletedTodos = (): void => {
    setTodos(todos.filter((todo: TodoItemInterface) => !todo.completed))
  }

  return (
    <TodoContext.Provider value={{
      todos,
      addTodo,
      deleteTodo,
      toggleTodo,
      deleteAllTodos,
      clearCompletedTodos,
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider