import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GoogleMapReact from "google-map-react";
import { Input, List, Spin, Tag } from "antd";
import debounce from "lodash.debounce";
// models
import { MapPin } from "@components/atoms";
import { MapModel } from "@models/map/Map";
// services
import { useGetLocationsQuery } from "@services/map/map";
// redux
import { RootState } from "@redux/store";
// styles
import "./SearchInput.styles.css";

const { Search } = Input;

// Add a check to ensure the API key is defined before using it
const googleMapApiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY || "";

export const SearchInput = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<MapModel[]>([]);

  // Fetch locations using Redux Toolkit query
  const { isLoading } = useGetLocationsQuery({ query });
  const mapState = useSelector((state: RootState) => state.map);

  useEffect(() => {
    setLoading(isLoading);

    // Update the search results state with the fetched results
    if (mapState?.results) {
      setSearchResults(mapState.results);
    }
  }, [isLoading, query, mapState.results]);

  // Debounce the query change to avoid unnecessary requests
  const debouncedQueryChange = debounce((value) => {
    setQuery(value);
  }, 500);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLoading(true);
    debouncedQueryChange(value);
  };

  // Reset loading state when results are available or query is cleared
  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading, query]);

  const calculateMapBounds = (locations: MapModel[]) => {
    if (locations.length === 0) return null;

    let minLat = locations[0].lat;
    let maxLat = locations[0].lat;
    let minLng = locations[0].long;
    let maxLng = locations[0].long;

    for (let i = 1; i < locations.length; i++) {
      const { lat, long } = locations[i];
      minLat = Math.min(minLat, lat);
      maxLat = Math.max(maxLat, lat);
      minLng = Math.min(minLng, long);
      maxLng = Math.max(maxLng, long);
    }

    const center = {
      lat: (minLat + maxLat) / 2,
      lng: (minLng + maxLng) / 2,
    };

    const bounds = {
      nw: { lat: maxLat, lng: minLng },
      se: { lat: minLat, lng: maxLng },
    };

    return { center, bounds };
  };

  return (
    <div>
      <div>
        <Search
          placeholder="Enter location"
          allowClear
          enterButton="Search"
          size="large"
          onChange={handleQueryChange}
        />
        {loading ? (
          <div className="spinner">
            <Spin tip="Loading..." />
          </div>
        ) : searchResults.length && query ? (
          <div className="map-container">
            <List
              size="small"
              header={<div className="title-header">Locations List</div>}
              bordered
              dataSource={mapState.results}
              renderItem={(item: any) => (
                <List.Item>{`${item.firstName} | ${item.lastName}`}</List.Item>
              )}
            />
          </div>
        ) : (
          <Tag>Search it or No result found...</Tag>
        )}
      </div>
      <div>
        {query && searchResults.length > 0 && (
          <div style={{ height: "100vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: googleMapApiKey,
              }}
              defaultCenter={{ lat: 0, lng: 0 }}
              defaultZoom={5}
              {...calculateMapBounds(searchResults)}
            >
              {searchResults?.map((location, index) => (
                <MapPin
                  key={index}
                  lat={location.lat}
                  lng={location.long}
                  text={location.firstName}
                />
              ))}
            </GoogleMapReact>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
