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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const MobileHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

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
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SNP-ONE
          </Typography>

          <div></div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MobileHeader;
