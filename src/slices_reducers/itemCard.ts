import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const itemCard = createAsyncThunk("itemcard", async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos",
    );
    return response.data
  } catch (error) {
    console.log(error);
  }
});

const itemCardSlice = createSlice({
  name: "ITEM-CARD",
  initialState: {
    isItemCardLoading: false,
    data: [],
    isItemCardError: false,
    isItemCardSuccess:false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(itemCard.pending, (state) => {
      state.isItemCardLoading = true;
      state.isItemCardError=false;
      state.isItemCardSuccess=false;
    });
    builder.addCase(itemCard.fulfilled, (state: any, action) => {
      state.isItemCardLoading = false;
      state.data=action.payload
      state.isItemCardSuccess=true;
      state.isItemCardError=false;
    });
    builder.addCase(itemCard.rejected, (state) => {
      state.isItemCardError = true;
      state.isItemCardSuccess=false;
      state.isItemCardLoading=false;
    });
  },
});

export const sliceCard=itemCardSlice.reducer;
