import { useDispatch, useSelector } from "react-redux"
import { incrementAsync, decrementAsync } from "../redux/actions"
import { selectCount } from "../redux/selectors"
import { CounterAction, CounterState } from "../redux/types"

function Counter() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch<ThunkDispatch<CounterState, unknown, CounterAction>>()

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={ () => dispatch(incrementAsync()) } >Increment</button>
      <button onClick={ () => dispatch(decrementAsync()) } >Decrement</button>
    </div>
  )
}

export default Counter