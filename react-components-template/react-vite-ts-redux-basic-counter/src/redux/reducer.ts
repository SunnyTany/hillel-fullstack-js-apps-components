import { ActionTypes } from './actionTypes'
import { CounterAction, CounterState } from './types'

const initialState: CounterState = {
  count: 0
}

function counterReducer(
  state: CounterState = initialState,
  action: CounterAction
) : CounterState {
  switch (
    action.type
  ) {
    case ActionTypes.INCREMENT:
      return { count: state.count +1 }
    case ActionTypes.DECREMENT:
      return { count: state.count -1 }
    default: 
      return state
  }
}

export default counterReducer