import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/main.css";

const divRoot = document.getElementById("root") as HTMLDivElement;
const root = ReactDOM.createRoot(divRoot);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
