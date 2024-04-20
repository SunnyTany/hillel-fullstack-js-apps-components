import { ActionTypes } from './actionTypes'
import { CounterAction } from './types'

export const increment = () : CounterAction => ({
  type: ActionTypes.DECREMENT
})

export const decrement = () : CounterAction => ({
  type: ActionTypes.DECREMENT
})