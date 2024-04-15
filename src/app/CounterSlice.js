import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = { x: 0, y: 0, z: 0 };

const counterSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    // action creators to be auto-generated
    incrementX(state, action) {state.x += action.payload;},
    incrementY(state, action) {state.y += action.payload;},
    incrementZ(state, action) {state.z += action.payload;}
  }
});
export const { incrementX, incrementY, incrementZ } = counterSlice.actions;
export default counterSlice.reducer;





// Try to define reusable selectors alongside their corresponding reducers.
// input selectors
const selectX = (state) => state.x;
const selectY = (state) => state.y;
const selectZ = (state) => state.z;

const selectSum = createSelector([selectX, selectY, selectZ], (x, y, z) => x + y + z);
const selectProduct = createSelector([selectX, selectY,selectZ],(x, y, z) => x * y * z);

export { selectSum, selectProduct, };
