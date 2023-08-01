import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";

const CustomThemeProvider = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0231C8",
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
