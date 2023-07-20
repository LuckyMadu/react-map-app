import { createSlice } from "@reduxjs/toolkit";

interface MapState {
  results: any;
}

const initialState: MapState = {
  results: [],
};

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setMapData(state, action) {
      const { data } = action.payload;
      state.results = data.data;
    },
  },
});

export const { setMapData } = mapSlice.actions;
export default mapSlice.reducer;
