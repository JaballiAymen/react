import { Provider } from "react-redux";
import { store } from "../../../Services/Store";
import Login from "./Login";

function App() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}

export default App;
