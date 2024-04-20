import { ActionTypes } from './actionTypes'
import { CounterAction, CounterState } from './types'

export const initialState: CounterState = {
  count: 0
}

function counterReducer(
  state: CounterState = initialState,
  action: CounterAction
) : CounterState {
  switch (
    (action.type)
  ) {
    case ActionTypes.INCREMENT:
      return { ...state, count: state.count +1 }
    case ActionTypes.DECREMENT:
      return { ...state, count: state.count -1 }
    default: 
      return state
  }
}

export default counterReducer