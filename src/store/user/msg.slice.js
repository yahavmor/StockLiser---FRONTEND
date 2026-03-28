import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    msg: {
        text: null,
        result: null
    }
}

const msgSlice = createSlice({
  name: 'msg',
  initialState,
  reducers: {
    showMsg(state, action) {
      state.msg.text = action.payload.text
      state.msg.result = action.payload.result
    },
    clearMsg(state) {
      state.msg.text = null
      state.msg.result = null
    }
  }
})

export const { showMsg, clearMsg } = msgSlice.actions
export default msgSlice.reducer
