import { useEffect, useState } from "react";
import { Input, List, Spin, Tag } from "antd";
import debounce from "lodash.debounce";
// services
import { useGetLocationsQuery } from "@services/map/map";
// styles
import "./SearchInput.styles.css";

const { Search } = Input;

export const SearchInput = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch locations using Redux Toolkit query
  const { isLoading, data: mapState } = useGetLocationsQuery({ query });

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
        <List
          size="small"
          header={<div>Locations List</div>}
          bordered
          dataSource={mapState.results}
          renderItem={(item: any) => (
            <List.Item>
              {`${item.firstName} | ${item.lastName} | ${item.email}`}
            </List.Item>
          )}
        />
      ) : (
        <Tag>No result found...</Tag>
      )}
    </div>
  );
};

export default SearchInput;
