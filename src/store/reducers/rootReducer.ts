import { combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { memberSlice, memberQuerySlice } from '../../member/slices'
import { authSlice } from '../../auth/slices/authSlice'

//Redux-Persist config
//Must place RTK Query reducer in the blacklist
export const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['auth'],
  blacklist: [memberQuerySlice.reducerPath],
}

export const rootReducer = combineReducers({
  member: memberSlice.reducer,
  auth: authSlice.reducer,

  /** Add RTQ Query Reducers*/
  [memberQuerySlice.reducerPath]: memberQuerySlice.reducer,
})
