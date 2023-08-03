import {
  ByteTheoryConfig,
  ByteTheoryTheme,
  Footer,
  GlobalLayout,
  NavModule,
} from "@bytetheoryinnovations/bytetheory-ui-library";
import { Logo } from "@bytetheoryinnovations/bytetheory-ui-library/assets";
import React from "react";
import { ErrorBoundary } from "./components/ErrorBoundary";
import DocsButton from "./components/common/DocsButton";
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

  const navLogoUrl = {
    name: "Logo",
    url: "https://bytetheoryinnovations.com/#home",
    options: { target: "_blank", rel: "noopener nofollow noreferrer" },
  };

  const linksMenuItems = [
    {
      name: "Home",
      url: "https://bytetheoryinnovations.com/#home",
      options: { target: "_blank", rel: "noopener nofollow noreferrer" },
    },
    {
      name: "About",
      url: "https://bytetheoryinnovations.com/#services",
      options: { target: "_blank", rel: "noopener nofollow noreferrer" },
    },
    {
      name: "Projects",
      url: "https://bytetheoryinnovations.com/#projects",
      options: { target: "_blank", rel: "noopener nofollow noreferrer" },
    },
    {
      name: "Contact",
      url: "https://bytetheoryinnovations.com/#contact",
      options: { target: "_blank", rel: "noopener nofollow noreferrer" },
    },
  ];

  return (
    <>
      <ErrorBoundary fallback={<Error />}>
        <ByteTheoryConfig providingLibraries={["@mui/material"]}>
          <ByteTheoryTheme mode={mode} rebaseStyles>
            <View>
              <Controller>
                <GlobalLayout
                  nav={
                    <NavModule
                      leftIcons={[<DocsButton key={1} themeMode={"light"} />]}
                      rightIcons={[<Logo key={1} logoUrl={navLogoUrl} />]}
                    />
                  }
                  footer={<Footer linksMenuItems={linksMenuItems} />}
                >
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
        </ByteTheoryConfig>
      </ErrorBoundary>
    </>
  );
};
