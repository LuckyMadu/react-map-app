import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { mapReducer } from "../slices";
import { baseApi } from "../../api/baseApi";

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  map: mapReducer,
});

// Configure the Redux store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(baseApi.middleware)
      .concat(thunk)
      .concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
