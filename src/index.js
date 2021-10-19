import React from "react";
import ReactDOM from "react-dom";

// redux imports
import { Provider } from "react-redux";
import store from "./app/store";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    {/* Подключение к реакту */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

/* 
Redux
store (createStore func)
reducer (наша func)

React-redux
Provider - подключение к дереву

*/
