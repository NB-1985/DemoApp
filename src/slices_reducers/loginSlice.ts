import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const logIn = createAsyncThunk("login", async (data: any) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/signup",
      data
    );
    return response.data
  } catch (error) {
    console.log(error);
  }
});

const signUpSlice = createSlice({
  name: "LOG-IN",
  initialState: {
    isLogInLoading: false,
    data: [],
    isLogInError: false,
    isLogInSuccess:false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logIn.pending, (state) => {
      state.isLogInLoading = true;
      state.isLogInError=false;
      state.isLogInSuccess=false;
    });
    builder.addCase(logIn.fulfilled, (state: any, action) => {
      state.isLogInLoading = false;
      state.data.push(action.payload);
      state.isLogInSuccess=true;
      state.isLogInError=false;
    });
    builder.addCase(logIn.rejected, (state) => {
      state.isLogInError = true;
      state.isLogInSuccess=false;
      state.isLogInLoading=false;
    });
  },
});

export const sliceSignUp=signUpSlice.reducer;
