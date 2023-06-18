import { configureStore } from "@reduxjs/toolkit";
import { shoesSlice } from "./shoes/slice";

export const store = configureStore({
    reducer: {
        shoes: shoesSlice.reducer,
       
        
    },
})