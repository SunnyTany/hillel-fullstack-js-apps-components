import { TodoItemInterface } from "./TodoItem.interface.ts"


export interface TodoContextInterface {
  todos: TodoItemInterface[]
  addTodo: (todo: TodoItemInterface) => void
  deleteTodo: (id: string) => void
  deleteAllTodos: () => void
  clearCompletedTodos: () => void
  toggleTodo: (id: string) => void
}