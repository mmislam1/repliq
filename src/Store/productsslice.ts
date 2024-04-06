
    




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
          const res = async () => {
        const x=await axios.get('/api/products/list')
        
        return x
        
      }

      console.log(res)
      //state.list=res.data.data
    },
    
  },
})


export const { getProducts } = productsslice.actions

export default productsslice.reducer