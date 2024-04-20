import RegistrationForm from './components/RegistrationForm'
import './App.css'

function App() {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6">
          <h1>React Bootstrap form</h1>
          <RegistrationForm />
        </div>
      </div>
    </div>
  )
}

export default App