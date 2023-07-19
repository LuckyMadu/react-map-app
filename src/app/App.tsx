import { Button, DatePicker, Space, version } from "antd";
import { Provider } from "react-redux";
import Home from "../features/Home/Home";
import { store } from "../redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
