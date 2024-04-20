import { configureStore } from '@reduxjs/toolkit'
import counterReductor from './counterSlice'

const store = configureStore({
  reducer: counterReductor,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
})

export default store