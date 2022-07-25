import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./routes/routes";
import GlobalFonts from "./styles/GlobalFonts";
import GlobalStyles from "./styles/GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <GlobalFonts />
    <GlobalStyles />
    <Router />
  </React.StrictMode>,
);
