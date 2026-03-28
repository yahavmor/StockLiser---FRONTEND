import { createSlice } from '@reduxjs/toolkit'
import { loadFromStorage } from '../../services/LocalStorage'

const initialState = {
  user: loadFromStorage('user-crad'), 
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload
    },
    clearUser(state) {
      state.user = undefined
    },


  }
})

export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer
