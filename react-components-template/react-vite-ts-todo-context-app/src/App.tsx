import TodoProvider from './components/TodosG/TodoProvider'
import Title from './components/Title/Title'
import Form from './components/Form/Form'
import TodoActions from './components/TodoActions/TodoActions'
import Todos from './components/TodosG/Todos/Todos'
import './App.css'

const App = () => {
  return (
    <div className="container">
      <TodoProvider>
        <Title />
        <Form />
        <TodoActions/>
        <Todos />
      </TodoProvider>
    </div>
  )
}

export default App