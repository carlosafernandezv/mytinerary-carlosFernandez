import { configureStore } from '@reduxjs/toolkit'
import { productReducer } from './reducer/productReducer'
import authReducer from "./reducer/authReducer"
import citiesReducer from './reducer/citiesReducer'


const store = configureStore({
    reducer : {
        productsStore: productReducer,
        authStore: authReducer,
        citiesStore: citiesReducer,
        
    }
})

export default store