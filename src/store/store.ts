import { configureStore } from '@reduxjs/toolkit'
import { contactSlice } from './contactsReducer'

export const store = configureStore({
 reducer: {
   contacts:contactSlice.reducer
 },
})


export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch