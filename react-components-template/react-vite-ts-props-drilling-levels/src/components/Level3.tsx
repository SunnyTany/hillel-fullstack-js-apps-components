import { useContext } from "react"
import { PropContext } from "../App"
import { SecondContext } from "../App"

const Level3 = () => {
  const { value}  = useContext(PropContext)
  const secondValue = useContext(SecondContext)

  return (
    <div>
      <h4>Level 3: {value}</h4>
      <h4>Level 3: {secondValue}</h4>
    </div>
  )
}

export default Level3