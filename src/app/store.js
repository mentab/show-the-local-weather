import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { dashboardSlice } from '../features/dashboard/dashboardSlice'
import { thunk } from 'redux-thunk'

let state = {}

export const store = configureStore({
  preloadedState: state,
  reducer: combineReducers({
    dashboard: dashboardSlice.reducer,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})
