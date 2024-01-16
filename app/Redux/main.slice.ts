import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
   isHeaderDropdownActive: boolean;
};

const initialState: initialStateType = {
   isHeaderDropdownActive: false,
};

export const mainSlice = createSlice({
   name: "mainSlice",
   initialState,
   reducers: {
      openHeaderDropDown: (state) => {
         state.isHeaderDropdownActive = true;
      },
      closeHeaderDropDown: (state) => {
         state.isHeaderDropdownActive = false;
      },
   },
});
export const { openHeaderDropDown, closeHeaderDropDown } = mainSlice.actions;
export default mainSlice.reducer;
