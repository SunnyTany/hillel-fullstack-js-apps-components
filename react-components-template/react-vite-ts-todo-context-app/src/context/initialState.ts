import { TodoContextInterface } from "../types/TodoContext.interface";

export const initialState: TodoContextInterface = {
  todos: [],
  addTodo: ():void => {},
  deleteTodo: ():void => {},
  toggleTodo: (): void => {},
  deleteAllTodos: (): void => {},
  clearCompletedTodos: (): void => {}
}