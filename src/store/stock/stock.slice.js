import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loader:false
}

const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    toggleLoader(state,action){
      state.loader = action.payload
    }
  }
})

export const { toggleLoader } = stockSlice.actions
export default stockSlice.reducer
