import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import themeSlice from './features/themeSlice'
import sessionSlice from './features/sessionSlice'


const persistConfig = {
  key: 'root',
  storage,
}

const reducers = combineReducers({
  theme: themeSlice,
  session: sessionSlice
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: [thunk]
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
