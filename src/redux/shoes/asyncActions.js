import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchShoes = createAsyncThunk('shoes/fetchShoes', async () => {
    const response = await axios.get("https://644163a1fadc69b8e082e321.mockapi.io/items?category=Male" )
    return response.data
})