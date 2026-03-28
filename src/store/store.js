import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/user.slice.js'
import stockReducer from './stock/stock.slice.js'
import msgReducer from './user/msg.slice.js'

export const store = configureStore({
  reducer: {
    userModule: userReducer,
    stockModule: stockReducer,
    msgModule: msgReducer,
  }
})
