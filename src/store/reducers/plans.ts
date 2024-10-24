import { createSlice } from '@reduxjs/toolkit'

const initialPlans = [
  {
    id: 1,
    img: {
      src: './icon-arcade.svg',
      alt: 'arcade',
    },
    text: 'Arcade',
    prices: ['$9/mo', '$90/yr'],
    isActive: true,
  },
  {
    id: 2,
    img: {
      src: './icon-advanced.svg',
      alt: 'advanced',
    },
    text: 'Advanced',
    prices: ['$12/mo', '$120/yr'],
    isActive: false,
  },
  {
    id: 3,
    img: {
      src: './icon-pro.svg',
      alt: 'pro',
    },
    text: 'Pro',
    prices: ['$15/mo', '$150/yr'],
    isActive: false,
  },
]

export const plansSlice = createSlice({
  name: 'plans',
  initialState: {
    items: initialPlans,
    planType: 'monthly',
  },
  reducers: {
    setPlan: (state, action) => {
      state.items.forEach((plan) => {
        plan.isActive = plan.id === action.payload
      })
    },
    setPlanType: (state, action) => {
      state.planType = action.payload
    },
  },
})

export const { setPlan, setPlanType } = plansSlice.actions
