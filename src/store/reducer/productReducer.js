import { createReducer } from "@reduxjs/toolkit";
import { setSearch, getProducts, createProduct } from "../actions/productActions"

const initialState = {
  products: [],
  search: "",
  loading: true,
  error: false,
};



export const productReducer = createReducer(initialState, (builder) => {
  builder.addCase(setSearch, (state, action) => {
    state.search = action.payload
  })


    //Casos para solicitud de productos
    .addCase(getProducts.pending, (state) => {

      state.loading = true;
    })
    .addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload
    })
    .addCase(getProducts.rejected, (state, action) => {
      state.error = true
      state.loading = false
    })

    //Casos para crear Producto
    .addCase(createProduct.pending, (state) => {
      console.log("Esta pendiente creación");
      state.loading = true;
    })
    .addCase(createProduct.fulfilled, (state, action) => {
      console.log("Se ha creado");
      state.loading = false;
      state.products.push(action.payload);
    })
})

//IMMER TOOLKIT