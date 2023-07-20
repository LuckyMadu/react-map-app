import { Provider } from "react-redux";
import { Card, Space } from "antd";
// components
import Home from "@features/Home/Home";
// redux
import { store } from "@redux/store";

function App() {
  return (
    <Provider store={store}>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <Card size="small">
          <Home />
        </Card>
      </Space>
    </Provider>
  );
}

export default App;
