import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSearching: false,
    searchTerm: null,
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        addFilterSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        toggoleIsSearching: (state, action) => {
            state.isSearching = !state.isSearching;
        },
    },
});

export const { addFilterSearchTerm, toggoleIsSearching } = filterSlice.actions;
export default filterSlice.reducer;
