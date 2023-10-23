import { configureStore } from "@reduxjs/toolkit";
import { sliceCounter } from "../slices_reducers/counterSlice";



const store=configureStore({
    reducer:{
     counter:sliceCounter,
    }
});

export default store;