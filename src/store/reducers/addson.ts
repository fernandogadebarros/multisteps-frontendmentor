import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: 1,
    title: 'Online service',
    subtitle: 'Access to multiplayer games',
    prices: ['+$1/mo', '+$10/yr'],
    isChecked: true,
  },
  {
    id: 2,
    title: 'Larger storage',
    subtitle: 'Extra 1TB of cloud save',
    prices: ['+$1/mo', '+$20/yr'],
    isChecked: false,
  },
  {
    id: 3,
    title: 'Customizable profile',
    subtitle: 'Custom theme on your profile',
    prices: ['+$1/mo', '+$20/yr'],
    isChecked: false,
  },
]

export const addOnSlice = createSlice({
  name: 'addson',
  initialState,
  reducers: {
    setAddOn: (state, action) => {
      const addon = state.find((addon) => addon.id === action.payload)
      if (addon) {
        addon.isChecked = !addon.isChecked
      }
    },
  },
})

export const { setAddOn } = addOnSlice.actions
