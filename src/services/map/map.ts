// models
import { MapModelResponse, SearchProps } from "@models/map/Map";
// utils
import { baseApi } from "@api/baseApi";
import { API_ENDPOINTS } from "@constants";
import { setMapData } from "@redux/slices/mapSlice";

export const mapApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLocations: builder.query<MapModelResponse, SearchProps>({
      query({ query }) {
        // GOOGLE MAP PLACES API
        // return {
        //   url: `${API_ENDPOINTS.MAP_API.MAP_ENDPOINT}${query}&types=restaurant&key=${process.env.REACT_APP_MAP_API_KEY}`,
        // };
        return {
          url: `${API_ENDPOINTS.MAP_API.DUMMY_ENDPOINT}/employee/search?query=${query}`,
        };
      },
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setMapData(data));
        } catch (error) {
          console.log("mapApi error-----", error);
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetLocationsQuery } = mapApi;
