import { FC } from "react";
import { Layout, Space } from "antd";
import { SearchInput } from "@components/molecules";

const App: FC = () => {
  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>
        <SearchInput />
      </Layout>
    </Space>
  );
};

export default App;
