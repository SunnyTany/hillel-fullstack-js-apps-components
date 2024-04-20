import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AppThunk } from './store';

export type CounterState = {
  count: number
};

const initialState: CounterState = {
  count: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementSuccess: (state, action: PayloadAction<number>) => {
      state.count += action.payload
    },
    decrementSuccess: (state, action: PayloadAction<number>) => {
      state.count -= action.payload
    },
  },
})



export const incrementAsync = (): AppThunk => async (dispatch) => {
  setTimeout(() => {
    dispatch(incrementSuccess(1))
  }, 1000)
}

export const decrementAsync = (): AppThunk => async (dispatch) => {
  setTimeout(() => {
    dispatch(decrementSuccess(1))
  }, 1000)
}

export const { incrementSuccess, decrementSuccess } = counterSlice.actions

export default counterSlice.reducer