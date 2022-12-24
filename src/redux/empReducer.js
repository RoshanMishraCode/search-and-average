import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  item: [],
  averageAge: 0,
};
const empSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmp: (state, action) => {
      state.item.push(action.payload);
    },
    removeEmp: (state, action) => {
      const filteredEmp = state.item.filter(
        (item) => item.id !== action.payload
      );
      state.item = filteredEmp;
    },
    sortData: (state, action) => {
      const sortItem = state.item.sort((a, b) => {
        return a.age - b.age;
      });
      state.item = sortItem;
    },
    getAverageAge(state, action) {
      const age = state.item.reduce((acc, item, i) => {
        acc = acc + item.age;
        return acc;
      }, 0);
      if (state.item.length > 0) {
        state.averageAge = (age / state.item.length).toFixed(2);
      } else {
        state.averageAge = 0;
      }
    },
  },
});
export const { addEmp, removeEmp, sortData, getAverageAge } = empSlice.actions;
export default empSlice.reducer;
