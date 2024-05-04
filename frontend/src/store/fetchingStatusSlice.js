import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFechDone: (state) => {
       state.fetchDone = true;
    },
    markFetchingStarted: (state) => {
       state.currentlyFetching = true;
    },
    markFechingFinished: (state) => {
      state.currentlyFetching = false;
    },
  },
});
export const fetchStutusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;
