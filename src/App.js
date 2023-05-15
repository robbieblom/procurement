import {
  ByteTheoryTheme,
  GlobalLayout,
} from "@bytetheoryinnovations/bytetheory-ui-library";
import React from "react";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { LiquidateBackdrop } from "./components/common/LiquidateBackdrop";
import { MarketBackdrop } from "./components/common/MarketBackdrop";
import { Controller } from "./context/Controller";
import { View } from "./context/View";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { appStore } from "./stores/AppStore";

export const App = () => {
  const mode = appStore((state) => state.mode);
  const [marketBackdropOpen, marketBackdropText] = appStore((state) => [
    state.marketBackdropOpen,
    state.marketBackdropText,
  ]);
  const liquidateBackdropOpen = appStore(
    (state) => state.liquidateBackdropOpen
  );

  return (
    <>
      <ErrorBoundary fallback={<Error />}>
        <ByteTheoryTheme mode={mode} rebaseStyles>
          <View>
            <Controller>
              <GlobalLayout>
                <Home />
                <MarketBackdrop
                  open={marketBackdropOpen}
                  text={marketBackdropText}
                />
                <LiquidateBackdrop open={liquidateBackdropOpen} />
              </GlobalLayout>
            </Controller>
          </View>
        </ByteTheoryTheme>
      </ErrorBoundary>
    </>
  );
};
