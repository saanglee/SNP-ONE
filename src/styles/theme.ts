import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: [
        "Nunito",
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        "font_light",
        "font_regular",
        "font_bold",
        "Gfont_light",
        "Gfont_regular",
        "Gfont_bold",
      ].join(","),
      textTransform: "none",
      fontSize: 16,
    },
  },
  palette: {
    primary: {
      main: "#0F2C6E",
      contrastText: "#fff",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#0F2C6E",
          color: "white",
          borderColor: "#1BBDEC",
        },
      },
    },
  },
});
