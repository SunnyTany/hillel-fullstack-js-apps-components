import { Action, Middleware, MiddlewareAPI, configureStore } from "@reduxjs/toolkit"
import counterReducer, { initialState } from './reducer'
import { CounterAction, CounterState } from "./types"

const logger:Middleware = (storeApi: MiddlewareAPI<Dispatch, RootState>) => (next) => (action) => {
  const prevState = storeApi.getState().counter.count
  const result = next(action)
  const nextState = storeApi.getState().counter.count
  console.log(`Prev state: , ${prevState}, Dispatch action ${(action as CounterAction).type}, Next state: ${nextState}`)
  return result
}

const store = configureStore({
  reducer: {
    counter: ( state: CounterState = initialState, action: Action ) =>   counterReducer(state, action as CounterAction)
  },
  middleware: ( getDefaultMiddleware ) => {getDefaultMiddleware().concat(logger)}
})

export default store