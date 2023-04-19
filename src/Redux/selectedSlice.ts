import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface SelectedState {
	items: string[];
}

// Define the initial state using that type
const initialState: SelectedState = {
	items: [],
};

export const selectedSlice = createSlice({
	name: "selected",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		add: (state, action: PayloadAction<string>) => {
			state.items.push(action.payload);
		},
		remove: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter((_, index) => index !== action.payload);
		},
	},
});

export const { add, remove } = selectedSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSelectedList = (state: RootState) => state.selected.items;

export default selectedSlice.reducer;
