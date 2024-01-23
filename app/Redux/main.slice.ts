import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type SubCheckboxes = {
   id: number;
   array: Array<boolean>;
};

type initialStateType = {
   isHeaderDropdownActive: boolean;
   equipCheckboxes: Array<boolean>;
   chillerCheckboxes: SubCheckboxes;
   vrfCheckboxes: SubCheckboxes;
};

const initialState: initialStateType = {
   isHeaderDropdownActive: false,
   equipCheckboxes: [false, false, false, false],
   chillerCheckboxes: {
      id: 1,
      array: [false, false, false, false, false],
   },
   vrfCheckboxes: {
      id: 2,
      array: [false, false, false, false],
   },
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
      toggleChillerCheckboxes: (state, action: PayloadAction<number>) => {
         let newArray = [...state.chillerCheckboxes.array];
         newArray[action.payload] = !newArray[action.payload];
         state.chillerCheckboxes.array = newArray;
      },
      toggleVrfCheckboxes: (state, action: PayloadAction<number>) => {
         let newArray = [...state.vrfCheckboxes.array];
         newArray[action.payload] = !newArray[action.payload];
         state.vrfCheckboxes.array = newArray;
      },
   },
});
export const {
   openHeaderDropDown,
   closeHeaderDropDown,
   toggleEquipCheckbox,
   toggleChillerCheckboxes,
   toggleVrfCheckboxes,
} = mainSlice.actions;
export default mainSlice.reducer;
