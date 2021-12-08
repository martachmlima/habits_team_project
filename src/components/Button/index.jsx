import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const BasicButtons = ({ children, ...rest }) => {
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
    <Stack spacing={2} direction="row">
      <ThemeProvider theme={theme}>
        <Button
          style={{ width: "200px", fontSize: "14px" }}
          variant="contained"
          {...rest}
        >
          {children}
        </Button>
      </ThemeProvider>
    </Stack>
  );
};

export default BasicButtons;
