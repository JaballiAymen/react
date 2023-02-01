import React from "react";
import { Provider } from "react-redux";
import Login from "./Login";
import store from "../../../Services/Store";

function App() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}

export default App;
