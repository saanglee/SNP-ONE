import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import { ThemeProvider } from "@mui/material";
import { theme } from "../styles/theme";
import { RecoilRoot } from "recoil";
import NotFound404 from "../pages/NotFound404";

const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/dash" element={<Dashboard />} />
            {["/", "/sign"].map((path, index) => {
              return <Route path={path} element={<SignUp />} key={index} />;
            })}
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </ThemeProvider>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;
