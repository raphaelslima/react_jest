import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Tasks from "./components/Tasks/Tasks";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Tasks />
  </React.StrictMode>
);
