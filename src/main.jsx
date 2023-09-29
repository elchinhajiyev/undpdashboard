import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { store, persistor } from "./redux/app/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; // redux-persist için PersistGate'i içe aktarın

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
