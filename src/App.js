import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Controller } from "./context/Controller";
import { View } from "./context/View";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { GlobalLayout } from "./pages/layout/GlobalLayout";
import { themeOptions } from "./theme/theme-options";

export const App = () => {
  const theme = createTheme(themeOptions());
  console.log(theme);

  return (
    <ErrorBoundary fallback={<Error />}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <View>
          <Controller>
            <GlobalLayout>
              <Home />
            </GlobalLayout>
          </Controller>
        </View>
      </ThemeProvider>
    </ErrorBoundary>
  );
};
