import { TodoItemInterface } from './TodoItem.interface'

export interface TodoPropsInterface {
  todo: TodoItemInterface,
  deleteTodo: (id: string) => void,
  toggleTodo: (id: string) => void
}