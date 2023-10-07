import { createSlice } from '@reduxjs/toolkit'
import { Member as Member } from '../types'

export interface initalState {
  members: Member[]
}

const initialState: initalState = {
  members: [],
}

export const memberSlice = createSlice({
  name: 'memberSlice',
  initialState,
  reducers: {
    onAddMember: (state, { payload }) => {
      state.members.push(payload)
    },

    onLoadMembers: (state, { payload }) => {
      state.members = payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { onAddMember, onLoadMembers } = memberSlice.actions

export default memberSlice.reducer
