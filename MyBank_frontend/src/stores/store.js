import { configureStore } from '@reduxjs/toolkit'
import { inputSlice } from './slices/InputSlice'

export default configureStore({
    reducer: {
        input: inputSlice.reducer,
    },
})