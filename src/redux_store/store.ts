import { configureStore } from "@reduxjs/toolkit";
import { sliceCounter } from "../slices_reducers/counterSlice";
import { sliceSignUp } from "../slices_reducers/signUpSlice";
import { sliceCard } from "../slices_reducers/itemCard";



const store=configureStore({
    reducer:{
     counter:sliceCounter,
     signup:sliceSignUp,
     card:sliceCard,

    }
});

export default store;