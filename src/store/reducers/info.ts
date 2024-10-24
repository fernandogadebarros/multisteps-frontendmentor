import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: '',
  email: '',
  phone: '',
}

export const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    saveInfo: (state, action) => {
      state.username = action.payload.username
      state.email = action.payload.email
      state.phone = action.payload.phone
    },
  },
})

export const { saveInfo } = infoSlice.actions
