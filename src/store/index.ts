import { configureStore } from '@reduxjs/toolkit'
import { stepsSlice } from './reducers/steps'
import { plansSlice } from './reducers/plans'
import { addOnSlice } from './reducers/addson'
import { infoSlice } from './reducers/info'

export const store = configureStore({
  reducer: {
    info: infoSlice.reducer,
    steps: stepsSlice.reducer,
    plans: plansSlice.reducer,
    addson: addOnSlice.reducer,
  },
})
