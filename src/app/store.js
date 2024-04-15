import {configureStore} from '@reduxjs/toolkit'
import Counterslice from './CounterSlice'

export const store = configureStore({
    reducer:{
        Counter :Counterslice
    }
})