import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser",
  params: {
    "nutrition-type": "cooking",
    "category[0]": "generic-foods",
    "health[0]": "alcohol-free",
  },
  headers: {
    "X-RapidAPI-Key": "1bdf64a6dcmsh3e72aaebdf3d926p1db53cjsn6397c4019db1",
    "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
  },
};

export const itemCard = createAsyncThunk("itemcard", async () => {
  try {
    const response = await axios.request(options);
    return response.data;
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
    isItemCardSuccess: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(itemCard.pending, (state) => {
      state.isItemCardLoading = true;
      state.isItemCardError = false;
      state.isItemCardSuccess = false;
    });
    builder.addCase(itemCard.fulfilled, (state: any, action) => {
      state.isItemCardLoading = false;
      state.data = action.payload;
      state.isItemCardSuccess = true;
      state.isItemCardError = false;
    });
    builder.addCase(itemCard.rejected, (state) => {
      state.isItemCardError = true;
      state.isItemCardSuccess = false;
      state.isItemCardLoading = false;
    });
  },
});

export const sliceCard = itemCardSlice.reducer;
