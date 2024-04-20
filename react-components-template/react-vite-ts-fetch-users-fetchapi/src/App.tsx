import Users from './components/Users/Users'
import ControledLoginForm from './components/ControledLoginForm/ControledLoginForm'
import './App.css'

function App() {
  return (
    <div className="container">
      <hr/>
      <h1 className='mt-5'>Controled Login Form</h1>
      <ControledLoginForm />
      <hr/>
      <h1 className='mt-5 mb-5'>Users</h1>
      <Users />
      <hr/>
    </div>
  )
}

export default App