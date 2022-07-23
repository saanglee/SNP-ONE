import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./routes/routes";
import GlobalFonts from "./styles/GlobalFonts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <GlobalFonts />
    <Router />
  </React.StrictMode>,
);
