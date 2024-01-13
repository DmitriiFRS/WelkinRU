import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
   isHeaderDropdownActive: boolean;
   currentPage: number;
};

const initialState: initialStateType = {
   isHeaderDropdownActive: false,
   currentPage: 1,
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
      setCurrentPage: (state, action: PayloadAction<number>) => {
         state.currentPage = action.payload;
      },
   },
});
export const { openHeaderDropDown, closeHeaderDropDown, setCurrentPage } = mainSlice.actions;
export default mainSlice.reducer;
