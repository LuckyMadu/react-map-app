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
  const [selectedLocation, setSelectedLocation] = useState<MapModel | null>(
    null
  );

  console.log("selectedLocation----------", selectedLocation);

  // Fetch locations using Redux Toolkit query
  const { isLoading } = useGetLocationsQuery({ query });
  const mapState = useSelector((state: RootState) => state.map);

  useEffect(() => {
    setLoading(isLoading);
    // Automatically set the location if there's only one result in the list
    if (mapState?.results && mapState.results.length === 1) {
      setSelectedLocation(mapState.results[0]);
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
        ) : mapState?.results && mapState.results.length && query ? (
          <div className="map-container">
            <List
              size="small"
              header={<div className="title-header">Locations List</div>}
              bordered
              dataSource={mapState.results}
              renderItem={(item: any) => (
                <List.Item
                  onClick={() => setSelectedLocation(item)}
                >{`${item.firstName} | ${item.lastName}`}</List.Item>
              )}
            />
          </div>
        ) : (
          <Tag>Search it or No result found...</Tag>
        )}
      </div>
      <div>
        {selectedLocation && (
          <div style={{ height: "100vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: googleMapApiKey,
              }}
              defaultCenter={{
                lat: selectedLocation.lat,
                lng: selectedLocation.long,
              }}
              defaultZoom={8}
            >
              <MapPin
                lat={selectedLocation.lat}
                lng={selectedLocation.long}
                text={selectedLocation.firstName}
              />
            </GoogleMapReact>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
