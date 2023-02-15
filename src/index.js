import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Stateprovider } from "./StateProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Stateprovider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Stateprovider>
);
