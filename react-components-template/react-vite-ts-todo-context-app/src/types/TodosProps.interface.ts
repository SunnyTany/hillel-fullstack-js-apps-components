import { TodoItemInterface } from './TodoItem.interface'

export interface TodosPropsInterface {
  todos: TodoItemInterface[],
  deleteTodo: (id: string) => void,
  toggleTodo: (id: string) => void
}