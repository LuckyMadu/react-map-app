import { baseApi } from "../../api/baseApi";
// models
import { MapModelResponse, SearchProps } from "../../models/map/Map";
// utils
import { API_ENDPOINTS } from "../../constants";

export const mapApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get building page details
    getLocations: builder.query<MapModelResponse, SearchProps>({
      query({ query }) {
        return {
          url: `${API_ENDPOINTS.MAP_API.MAP_ENDPOINT}${query}&types=restaurant&key=${process.env.REACT_APP_MAP_API_KEY}`,
        };
      },
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log("data------------------------", data);
        } catch (error) {
          console.log("mapApi error-----", error);
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetLocationsQuery } = mapApi;
