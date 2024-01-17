import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Inner = {
   index: number;
};

type initialStateType = {
   isHeaderDropdownActive: boolean;
   equipCheckboxes: Array<boolean>;
};

const initialState: initialStateType = {
   isHeaderDropdownActive: false,
   equipCheckboxes: [false, false, false, false],
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
      toggleEquipCheckbox: (state, action: PayloadAction<number>) => {
         let newArray = [...state.equipCheckboxes];
         newArray[action.payload] = !newArray[action.payload];
         state.equipCheckboxes = newArray;
      },
   },
});
export const { openHeaderDropDown, closeHeaderDropDown, toggleEquipCheckbox } = mainSlice.actions;
export default mainSlice.reducer;
