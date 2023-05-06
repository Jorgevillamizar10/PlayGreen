import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'


export interface initialStateProps {
  isAuth: boolean
}

const initialState: initialStateProps = {
  isAuth: true
}

const sessionSlice = createSlice({
  name: 'session',
  initialState: initialState,
  reducers: {
    setAuth: (state: initialStateProps, action) => {
      state.isAuth = action.payload
    }
  }
})

export const {
  setAuth
} = sessionSlice.actions

export default sessionSlice.reducer

export const sessionSelector = (state: RootState) => state.session
