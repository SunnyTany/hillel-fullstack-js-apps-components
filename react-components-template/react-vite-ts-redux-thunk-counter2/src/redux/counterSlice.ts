import {createSlice} from "@reduxjs/toolkit"

export type CounterState = {
  count: number
}

const initialState: CounterState = {
  count: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    }
  } 
})

export default counterSlice.reducer