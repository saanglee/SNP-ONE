import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import { ThemeProvider } from "@mui/material";
import { theme } from "../styles/theme";
import { RecoilRoot } from "recoil";

const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path={"/sign"} element={<SignUp />} /> */}

            {["/", "/sign", "*"].map((path, index) => {
              return <Route path={path} element={<SignUp />} key={index} />;
            })}
            <Route path="/dash" element={<Dashboard />} />
          </Routes>
        </ThemeProvider>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;
