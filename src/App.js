import { useTheme } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/system";
import { deepmerge } from "@mui/utils";
import React from "react";
import "./App.css";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Controller } from "./context/Controller";
import { View } from "./context/View";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { appStore } from "./stores/AppStore";
import { themeOptions } from "./theme/theme-options";

export const App = () => {
  const muiSystemTheme = useTheme();
  const theme = createTheme(deepmerge(muiSystemTheme, themeOptions()));
  window.appStore = appStore;

  return (
    <ErrorBoundary fallback={<Error />}>
      <ThemeProvider theme={theme}>
        <View>
          <Controller>
            <Home></Home>
          </Controller>
        </View>
      </ThemeProvider>
    </ErrorBoundary>
  );
};
