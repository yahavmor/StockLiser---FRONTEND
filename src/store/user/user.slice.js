import { createSlice } from '@reduxjs/toolkit'
import { loadFromStorage } from '../../services/LocalStorage'

const initialState = {
  user: loadFromStorage('user-crad'), 
  prefs: loadFromStorage('user-prefs'),
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload
    },
    clearUser(state) {
      state.user = null
    },
    clearPrefs(state){
      state.prefs = {}
    },
    setColor(state, action) {
      state.prefs = {
        ...state.prefs,
        color: action.payload
      }
    },
    setBgcColor(state, action) {
      state.prefs = {
        ...state.prefs,
        bgcColor: action.payload
      }
    }

  }
})

export const { setUser, clearUser, setColor, setBgcColor, clearPrefs } = userSlice.actions
export default userSlice.reducer
