import { configureStore } from '@reduxjs/toolkit'
import { useReducer } from 'react'
import userReducer from './userslice'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch