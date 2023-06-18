import { createSlice } from "@reduxjs/toolkit";
import { fetchShoes } from "./asyncActions";

const initialState = {
    shoes: [],
    status: 'idle',
    error: null,
}


export const shoesSlice = createSlice({
    name: "shoes",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
    builder
      .addCase(fetchShoes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchShoes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.shoes = action.payload
      })
      .addCase(fetchShoes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
    }
})

export const { setShoes } = shoesSlice.actions