import { createSlice } from '@reduxjs/toolkit'

export const inputSlice = createSlice({
    name: 'input',
    initialState: {
        value: {},
    },
    reducers: {
        setInputValue: (state, action) => {
            const { value } = action.payload;
            state.value = value;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setInputValue } = inputSlice.actions
export default inputSlice.reducer