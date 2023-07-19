import React, { FC } from "react";
import { Layout, Space } from "antd";
import { SearchInput } from "../../components/molecules";
import { useGetLocationsQuery } from "../../services/map/map";

const { Header } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

const App: FC = () => {
  // Initiate map API calls
  const { isLoading: isLoadingLocations } = useGetLocationsQuery({
    query: "malaysia",
  });
  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>
        <Header style={headerStyle}>
          <SearchInput />
        </Header>
      </Layout>
    </Space>
  );
};

export default App;