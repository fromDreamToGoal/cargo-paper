import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loadAddresses: [],
  unloadAddresses: []
}

const addressesSlice = createSlice({
  name: 'addresses',
  initialState,
  reducers: {
    addLoadAddress(state, action) {
      if (!state.loadAddresses.includes(action.payload)) {
        state.loadAddresses.push(action.payload)
      }
    },
    addUnloadAddress(state, action) {
      if (!state.unloadAddresses.includes(action.payload)) {
        state.unloadAddresses.push(action.payload)
      }
    }
  }
})

export const {
  addLoadAddress,
  addUnloadAddress
} = addressesSlice.actions

export default addressesSlice.reducer