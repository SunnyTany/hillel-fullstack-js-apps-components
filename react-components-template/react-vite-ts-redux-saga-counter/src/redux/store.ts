import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './counterSlice'
import createSagaMiddleware from "@redux-saga/core"
import rootSaga from "./counterSagas"

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    counter: counterReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export default store