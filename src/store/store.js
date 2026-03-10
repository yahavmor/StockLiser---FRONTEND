import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/user.slice.js'
import stockReducer from './stock/stock.slice.js'

export const store = configureStore({
  reducer: {
    userModule: userReducer,
    stockModule: stockReducer,
  }
})
