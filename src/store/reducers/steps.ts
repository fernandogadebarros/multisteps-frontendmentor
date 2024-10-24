import { createSlice } from '@reduxjs/toolkit'

const initialState = 1

export const stepsSlice = createSlice({
  name: 'steps',
  initialState,
  reducers: {
    nextStep: (state) => state + 1,
    prevStep: (state) => state - 1,
  },
})

export const { nextStep, prevStep } = stepsSlice.actions
