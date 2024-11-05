import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setSearch = createAction("SET_SEARCH");


export const getProducts = createAsyncThunk("GET_PRODUCTS", async () => {
    const response = await axios.get("http://localhost:8080/api/itineraries/all");
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return response.data.response
})


