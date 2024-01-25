import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
   isHeaderDropdownActive: boolean;
   equipCheckboxes: Array<boolean>;
   chillerCheckboxes: Array<boolean>;
   vrfCheckboxes: Array<boolean>;
};

const initialState: initialStateType = {
   isHeaderDropdownActive: false,
   equipCheckboxes: [false, false, false, false],
   chillerCheckboxes: [false, false, false, false, false],
   vrfCheckboxes: [false, false, false, false],
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
         state.equipCheckboxes[action.payload] = !state.equipCheckboxes[action.payload];
      },
      triggerEquipCheckbox: (state, action: PayloadAction<number>) => {
         state.equipCheckboxes.forEach((el, index) => {
            state.equipCheckboxes[index] = false;
         });
         state.equipCheckboxes[action.payload] = true;
      },
      toggleChillerCheckboxes: (state, action: PayloadAction<number>) => {
         let newArray = [...state.chillerCheckboxes];
         newArray[action.payload] = !newArray[action.payload];
         state.chillerCheckboxes = newArray;
      },
      toggleVrfCheckboxes: (state, action: PayloadAction<number>) => {
         let newArray = [...state.vrfCheckboxes];
         newArray[action.payload] = !newArray[action.payload];
         state.vrfCheckboxes = newArray;
      },
   },
});
export const {
   openHeaderDropDown,
   closeHeaderDropDown,
   toggleEquipCheckbox,
   triggerEquipCheckbox,
   toggleChillerCheckboxes,
   toggleVrfCheckboxes,
} = mainSlice.actions;
export default mainSlice.reducer;
