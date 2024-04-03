import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  info: object,
}

const initialState: UserState = {
  info: {},
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
    info: (state, action: PayloadAction<object>) => {
      state.info = action.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { info } = userSlice.actions

export default userSlice.reducer