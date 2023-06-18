import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    categoryName: 'all',
   
}

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setCategoryName(state, action){
            state.categoryName = action.payload
        },
        setFilters(state, action){
            if(Object.keys(action.payload).length){
                state.categoryName = action.payload.categoryName
            }
        }
        
    }
})

export const { setCategoryName, setFilters } = filterSlice.actions

export default filterSlice.reducer

