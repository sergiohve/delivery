import { createSlice } from "@reduxjs/toolkit";


export const searchSlice=createSlice({
  name: "search",
  initialState: {
    search: ""
  },
  reducers: {
    searchReducer: (state, action)=>{
      state.search = action.payload;
    }
  }
})

export const { searchReducer }= searchSlice.actions;
export default searchSlice.reducer;


