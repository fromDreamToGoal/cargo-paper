import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  drivers: []
}

const driversSlice = createSlice({
  name: 'drivers',
  initialState,
  reducers: {
    addDriver(state, action) {
      state.drivers.push(action.payload)
    },
    removeDriver(state, action) {
      state.drivers = state.drivers.filter(driver => driver.id !== action.payload)
    },
    updateDriver(state, action) {
      const index = state.drivers.findIndex(driver => driver.id === action.payload.id)
      if (index !== -1) {
        state.drivers[index] = action.payload
      }
    }
  }
})

// Селектор (получить по ID)
export const selectDriverById = (state, driverId) =>
  state.drivers.drivers.find(driver => driver.id === driverId)

export const { addDriver, removeDriver, updateDriver } = driversSlice.actions
export default driversSlice.reducer