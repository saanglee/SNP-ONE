import React from "react";
import { Box, Toolbar, styled, IconButton, Badge, Avatar } from "@mui/material";
import Styled from "styled-components";

import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import SettingsIcon from "@mui/icons-material/Settings";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Logo from "../../static/images/d.png";
import ButtonAnimation from "../../elements/Animations/ButtonAnimation";
import { Link, Navigate } from "react-router-dom";

const Header = () => {
  return (
    <Box>
      <MuiAppBar>
        <StyledToolbar>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <div>
              <StyledLink to="/">
                <img style={{ width: "180px" }} src={Logo} alt="" />
              </StyledLink>
            </div>
          </Box>
          <Icons>
            <StyledLink to="/">sign up</StyledLink>
            <div>
              <ButtonAnimation animation={["loopAnimation", "doneAnimation"]} />
            </div>
            <Badge>
              <SettingsIcon fontSize="large" />
            </Badge>
          </Icons>
        </StyledToolbar>
      </MuiAppBar>
    </Box>
  );
};

export default Header;

const StyledLink = Styled(Link)`
color: #fff;
`;

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
});
