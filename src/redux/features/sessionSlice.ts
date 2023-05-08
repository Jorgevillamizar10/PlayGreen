import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface SaveSportsProps {
  name: string
  image: string
  type: string
}

export interface initialStateProps {
  isAuth: boolean
  saveSports: Array<SaveSportsProps>
  sportsKey: number
}

const initialState: initialStateProps = {
  isAuth: false,
  saveSports: [],
  sportsKey: 0
}

const sessionSlice = createSlice({
  name: 'session',
  initialState: initialState,
  reducers: {
    setAuth: (state: initialStateProps, action) => {
      state.isAuth = action.payload
    },
    setSaveSports: (state: initialStateProps, action) => {
      state.saveSports = [...state.saveSports, action.payload]
    },
    setSportsKey: (state: initialStateProps, action) => {
      state.sportsKey = action.payload
    },
  }
})

export const {
  setAuth,
  setSaveSports,
  setSportsKey
} = sessionSlice.actions

export default sessionSlice.reducer

export const sessionSelector = (state: RootState) => state.session
