import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#1696d4" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
        },
      },
    },
  },
  typography: {
    button: {
      fontSize: "2rem",
    },
  },
});

export default theme;
