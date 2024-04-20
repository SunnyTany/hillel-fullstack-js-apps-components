import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { decrementAsync, incrementAsync } from "../redux/counterSlice"

function Counter() {
  const count = useSelector((state: RootState) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={ () => dispatch(incrementAsync()) } >Increment after 1sec</button>
      <button onClick={ () => dispatch(decrementAsync()) } >Decrement after 1sec</button>
    </div>
  )
}

export default Counter