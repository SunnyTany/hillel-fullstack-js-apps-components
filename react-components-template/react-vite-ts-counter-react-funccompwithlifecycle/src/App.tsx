import CountComponent from './components/CountComponent'
import { useState } from "react"
import './App.scss'

function App() {
  const [showComponent, setShowComponent] = useState(true)

  const toggleComponent = () => {
    setShowComponent(!showComponent)
  }

  return (
    <>
    <button onClick={toggleComponent}>{showComponent ? 'Hide' : 'Show'} Component</button> 
      {showComponent && <CountComponent/>}
    </>
  )
}

export default App
