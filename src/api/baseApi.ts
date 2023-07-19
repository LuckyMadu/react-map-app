import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Base Query
const baseQuery = fetchBaseQuery({
  baseUrl: "/",
  prepareHeaders: (headers, { getState, endpoint }) => {
    headers.set("Content-Type", "application/json");
    headers.set("Accept", "application/json");
    headers.set("Access-Control-Allow-Origin", "*"); // Allow requests from all origins
    headers.set(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    ); // Specify allowed headers
    return headers;
  },
});

// initialize an empty api service that we'll inject endpoints into later as needed
export const baseApi = createApi({
  baseQuery,
  endpoints: () => ({}),
});

// Export the API reducer and middleware
export const { reducer, middleware } = baseApi;
