import { createSlice } from '@reduxjs/toolkit'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function withPayloadType<T>() {
  return (t: T) => ({ payload: t })
}

export interface initalState {
  error: string
  errorMessage: string | undefined
  token: string
  exp: number
}

const initialState: initalState = {
  error: 'not-authenticated',
  errorMessage: undefined,
  token: '',
  exp: 0,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onChecking: (state) => {
      state.error = 'checking'
      state.errorMessage = undefined
    },
    onLogin: (state) => {
      state.error = 'authenticated'
      state.errorMessage = undefined
    },
    onLogout: (state, { payload }) => {
      state.error = 'not-authenticated'
      state.errorMessage = payload
    },
    onClearErrorMessage: (state) => {
      state.errorMessage = undefined
    },
  },
})

// Action creators are generated for each case reducer function
export const { onChecking, onLogin, onLogout, onClearErrorMessage } =
  authSlice.actions

export default authSlice.reducer
