import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, List, Spin, Tag } from "antd";
import { useGetLocationsQuery } from "../../../services/map/map"; // Update the path to your mapApi
import { RootState } from "@redux/store";

const { Search } = Input;

export const SearchInput = () => {
  const [query, setQuery] = useState("");

  // Fetch locations using Redux Toolkit query
  const { isLoading } = useGetLocationsQuery({ query });
  const mapState = useSelector((state: RootState) => state.map);

  return (
    <div>
      <Search
        placeholder="Enter location"
        allowClear
        enterButton="Search"
        size="large"
        onChange={(e) => setQuery(e.target.value)}
      />
      {isLoading ? (
        <Spin tip="Loading..." />
      ) : mapState?.results && mapState.results.length ? (
        <List
          size="small"
          header={<div>Locations List</div>}
          bordered
          dataSource={mapState.results}
          renderItem={(item: any) => <List.Item>{item.firstName}</List.Item>}
        />
      ) : (
        <Tag>No result found...</Tag>
      )}
    </div>
  );
};

export default SearchInput;
