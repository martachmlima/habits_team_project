import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const FloatingButton = ({ ...rest }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#9C27B0",
      },
      secondary: {
        main: "#D8BBE3",
      },
    },
  });
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <ThemeProvider theme={theme}>
        <Fab
          color="secondary"
          style={{ fontSize: "20px" }}
          aria-label="add"
          {...rest}
        ></Fab>
      </ThemeProvider>
    </Box>
  );
};
export default FloatingButton;
