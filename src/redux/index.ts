import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { reducer as auth } from './Auth/Auth.slice'

const reducers = combineReducers({
	auth,
})

export const store = configureStore({
	reducer: reducers,
})

export type RootState = ReturnType<typeof store.getState>
setupListeners(store.dispatch)
