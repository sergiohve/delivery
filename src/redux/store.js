import { configureStore } from "@reduxjs/toolkit"
import searchSlice from "./slices/searchSlice";
const store = configureStore({
  devTools: true,
  reducer: searchSlice,
});
export default store;
