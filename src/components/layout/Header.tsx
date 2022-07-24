import React from "react";
import {
  Box,
  Toolbar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Link,
  styled,
  IconButton,
  Badge,
  Avatar,
} from "@mui/material";

import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

import Drawer from "@mui/material/Drawer";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import PostAddIcon from "@mui/icons-material/PostAdd";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Logo from "../../static/images/d.png";

const Header = () => {
  return (
    <Box component="nav" aria-label="mailbox folders">
      <AppBar>
        <StyledToolbar>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <div>
              <Link href="/sign" color="inherit">
                <img style={{ width: "180px" }} src={Logo} alt="" />
              </Link>
            </div>
          </Box>
          <Icons>
            <Link href="/sign" color="inherit">
              sign up
            </Link>

            {/* <Badge>
              <NotificationsNoneIcon fontSize="large" />
            </Badge> */}
            <Badge>
              <SettingsIcon fontSize="large" />
            </Badge>
            {/* <UserBox>
              <Avatar sx={{ mr: 2 }} />
              <Typography>user</Typography>
            </UserBox> */}
          </Icons>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

const StyledLink = styled(Link)({
  textDecoration: "none",
  fontSize: 18,
  display: "block",
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const AppBar = styled(MuiAppBar)();
