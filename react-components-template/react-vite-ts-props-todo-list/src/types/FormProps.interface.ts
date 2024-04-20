import { TodoItemInterface } from "./TodoItem.interface.ts";

export interface FormPropsInterface {
    addTodo: (todo: TodoItemInterface) => void
}