import { useContext } from'react'
import { SecondContext } from '../App'

const Second = () => {
  const secondValue = useContext(SecondContext)

  return (
    <div>
      <h2>Second: {secondValue}</h2>
    </div>
  )
}

export default Second