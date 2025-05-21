import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  companies: []
}

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    addCompany(state, action) {
      state.companies.push(action.payload)
    },
    removeCompany(state, action) {
      state.companies = state.companies.filter(
        company => company.id !== action.payload
      )
    },
    updateCompany(state, action) {
      const index = state.companies.findIndex(
        company => company.id === action.payload.id
      )
      if (index !== -1) {
        state.companies[index] = action.payload
      }
    }
  }
})

// Селектор (получить по ID)
export const selectCompanyById = (state, companyId) =>
  state.companies.companies.find(company => company.id === companyId)

export const { addCompany, removeCompany, updateCompany } = companiesSlice.actions
export default companiesSlice.reducer