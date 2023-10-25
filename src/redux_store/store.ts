import { configureStore } from "@reduxjs/toolkit";
import { sliceCounter } from "../slices_reducers/counterSlice";
import { sliceSignUp } from "../slices_reducers/signUpSlice";



const store=configureStore({
    reducer:{
     counter:sliceCounter,
     signup:sliceSignUp,
    }
});

export default store;