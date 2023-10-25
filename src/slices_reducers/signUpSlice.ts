import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signUp = createAsyncThunk("signup", async (data: any) => {
  try {
    const response = await axios.post(
      "/auth/signup",
      data
    );
    return response.data
  } catch (error) {
    console.log(error);
  }
});

const signUpSlice = createSlice({
  name: "SIGN-UP",
  initialState: {
    isSignUpLoading: false,
    data: [],
    isSignUpError: false,
    isSignUpSuccess:false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state) => {
      state.isSignUpLoading = true;
      state.isSignUpError=false;
      state.isSignUpSuccess
    });
    builder.addCase(signUp.fulfilled, (state: any, action) => {
      state.isSignUpLoading = false;
      state.data.push(action.payload);
      state.isSignUpSuccess=true;
      state.isSignUpError=false;
    });
    builder.addCase(signUp.rejected, (state) => {
      state.isSignUpError = true;
      state.isSignUpSuccess=false;
      state.isSignUpLoading=false;
    });
  },
});

export const sliceSignUp=signUpSlice.reducer;
