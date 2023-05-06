import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'


export interface initialStateProps {
  theme: string
}

const initialState: initialStateProps = {
  theme: 'ligth'
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    setTheme: (state: initialStateProps, action) => {
      state.theme = action.payload
    }
  }
})

export const {
  setTheme
} = themeSlice.actions

export default themeSlice.reducer

export const themeSelector = (state: RootState) => state.theme
