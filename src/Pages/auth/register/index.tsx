import { Provider } from "react-redux";
import { store } from "../../../Services/Store";
import Register from "./form";

function App()  {
  return (
    <Provider store={store}>
      <Register />
    </Provider>
  );
}

export default App;
