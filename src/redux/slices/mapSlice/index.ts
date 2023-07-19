import { createSlice } from "@reduxjs/toolkit";

interface NoticeboardState {
  results: any;
}

const initialState: NoticeboardState = {
  results: [],
};

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setNoticeboards(state, action) {
      state.results = action.payload;
    },
  },
});

export const { setNoticeboards } = mapSlice.actions;
export default mapSlice.reducer;
