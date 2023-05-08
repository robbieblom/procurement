import { palette } from "./palette";
import { typography } from "./typography";

export const themeOptions = () => {
  const themeConfig = {
    palette: palette(),
    typography: typography(),
    custom: {
      footerBorder: "60px",
      footerGap: "40px",
      navBorderSpacing: "60px",
      navMenuWidth: "100vw",
    },
  };

  return themeConfig;
};
