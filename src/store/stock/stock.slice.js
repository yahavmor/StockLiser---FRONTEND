import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favorites: [],
  selectedStock: null
}

const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    addFavorite(state, action) {
      state.favorites.push(action.payload)
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter(
        stock => stock !== action.payload
      )
    },
    setSelectedStock(state, action) {
      state.selectedStock = action.payload
    }
  }
})

export const { addFavorite, removeFavorite, setSelectedStock } = stockSlice.actions
export default stockSlice.reducer
