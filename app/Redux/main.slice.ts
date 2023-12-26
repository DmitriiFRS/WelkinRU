import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {};

const initialState: initialStateType = {};

export const mainSlice = createSlice({
   name: "mainSlice",
   initialState,
   reducers: {},
});
export const {} = mainSlice.actions;
export default mainSlice.reducer;
