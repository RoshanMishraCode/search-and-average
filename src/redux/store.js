import { configureStore } from "@reduxjs/toolkit";
import empSlice from "./empReducer";

const store = configureStore({
    reducer:{
        empSlice
    }
})

export default store