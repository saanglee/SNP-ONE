import * as React from "react";
import {
  FormGroup,
  FormLabel,
  FormControlLabel,
  Switch,
  Box,
  Checkbox,
  styled,
  IconButton,
  Typography,
  Toolbar,
  AppBar,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../static/images/e.png";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeStatus } from "../../store/global";

const MobileHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [active, setActive] = useRecoilState(activeStatus);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        left: 0,
        width: "100%",
        flexGrow: 1,
        zIndex: 10,
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: "relative" }}
            onClick={() => setActive((state) => !state)}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ marginLeft: "auto" }}>
            <img style={{ width: "180px" }} src={Logo} alt="" />
          </div>

          <div></div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MobileHeader;
