import { configureStore } from '@reduxjs/toolkit'
import { productReducer } from './reducer/productReducer'
import authReducer from "./reducer/authReducer"



const store = configureStore({
    reducer : {
        productsStore: productReducer,
        authStore: authReducer
        
    }
})

export default store