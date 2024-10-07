import React from 'react'
import {configureStore} from "@reduxjs/toolkit"
import userSlice from './signupSlice'

const bookStore = configureStore({
    reducer: {
        signup: userSlice.reducer,
    }
})

export default bookStore