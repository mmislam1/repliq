
    




import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface productsstate {
  list: any,
}

const initialState: productsstate = {
  list: [],
}

export const productsslice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    
    getProducts: (state) => {
          state.list = async () => {
        const res = await axios.get('/api/products/list')
            console.log(res.data.data);
            console.log('hey')
        
        
}
    },
    
  },
})


export const { getProducts } = productsslice.actions

export default productsslice.reducer