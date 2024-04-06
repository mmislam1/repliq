"use client";

import { configureStore } from '@reduxjs/toolkit'
import { useReducer } from 'react'
import userReducer from './userslice'
import productsReducer from './productsslice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch