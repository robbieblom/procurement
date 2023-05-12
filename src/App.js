import {
  ByteTheoryTheme,
  GlobalLayout,
} from "@bytetheoryinnovations/bytetheory-ui-library";
import React from "react";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Controller } from "./context/Controller";
import { View } from "./context/View";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <>
      <ErrorBoundary fallback={<Error />}>
        <ByteTheoryTheme>
          <View>
            <Controller>
              <GlobalLayout>
                <Home />
              </GlobalLayout>
            </Controller>
          </View>
        </ByteTheoryTheme>
      </ErrorBoundary>
    </>
  );
};
