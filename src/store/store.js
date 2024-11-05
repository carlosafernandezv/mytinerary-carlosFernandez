import { configureStore } from '@reduxjs/toolkit'
import { productReducer } from './reducer/productReducer'



const store = configureStore({
    reducer : {
        productsStore: productReducer,
        
    }
})

export default store