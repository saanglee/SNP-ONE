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

interface HeaderProps {
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
  menuWidth: number;
  open: boolean;
  md?: boolean;
  sign: string;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  sidebar: number;
  sign: string;
}

const Header = ({
  handleDrawerOpen,
  handleDrawerClose,
  menuWidth,
  open,
  md,
  sign,
}: HeaderProps) => {
  const drawer = (
    <Box>
      <Divider />
      <List sx={{ padding: 0 }}>
        <StyledLink href="/" color="inherit">
          <ListItem disablePadding>
            <ListItemButton sx={{ pt: 2, pb: 2 }}>
              <ListItemIcon>
                <StackedLineChartIcon />
              </ListItemIcon>
              <span>홈</span>
            </ListItemButton>
          </ListItem>
        </StyledLink>
        <StyledLink href="/dash" color="inherit">
          <ListItem disablePadding>
            <ListItemButton sx={{ pt: 2, pb: 2 }}>
              <ListItemIcon>
                <PostAddIcon />
              </ListItemIcon>
              <span>유저관리</span>
            </ListItemButton>
          </ListItem>
        </StyledLink>
        <StyledLink href="/sign" color="inherit">
          <ListItem disablePadding>
            <ListItemButton sx={{ pt: 2, pb: 2 }}>
              <ListItemIcon>
                <PostAddIcon />
              </ListItemIcon>
              <span>등록하기</span>
            </ListItemButton>
          </ListItem>
        </StyledLink>
      </List>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { md: menuWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <AppBar open={open} sidebar={menuWidth} sign={sign}>
        <StyledToolbar>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography>
          </Box>
          <Icons>
            <Badge>
              <NotificationsNoneIcon fontSize="large" />
            </Badge>
            <Badge>
              <SettingsIcon fontSize="large" />
            </Badge>
            <UserBox>
              <Avatar sx={{ mr: 2 }} />
              <Typography>user</Typography>
            </UserBox>
          </Icons>
        </StyledToolbar>
      </AppBar>

      <Drawer
        sx={{
          width: menuWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: menuWidth,
            boxSizing: "border-box",
          },
        }}
        variant={md ? "temporary" : "persistent"}
        ModalProps={{
          keepMounted: true,
        }}
        onClose={handleDrawerClose}
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ArrowBackIosNewIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        {drawer}
      </Drawer>
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

const DrawerHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "sidebar",
})<AppBarProps>(({ theme, open, sidebar, sign }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: theme.palette.primary.main,
  ...(open && {
    width: `calc(100% - ${sidebar}px)`,
    marginLeft: `${sidebar}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(sign === "true" && {
    width: `calc(100% - ${sidebar}px)`,
    marginLeft: `${sidebar}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    display: "none",
  }),
}));
