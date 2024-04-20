import { createContext , useState} from'react'
import Level1 from './components/Level1'
import Second from './components/Second'

import './App.css'

export const PropContext = createContext({
  value:'Some default value',
  setValue: () => {},
})

export const SecondContext = createContext<string>('2) Some default value')

function App() {
  const [ value, setValue ] = useState<string>('1) Some default value')
  const secondValue = '2) Second value'

  return (
    <PropContext.Provider value={{value, setValue}}>
      <SecondContext.Provider value={secondValue}>
        <h1>App component: Context & React</h1>
        <Level1/>
        <Second />
      </SecondContext.Provider>
    </PropContext.Provider>
  )
}

export default App
