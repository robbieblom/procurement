import { palette } from "./palette";
import { typography } from "./typography";

export const themeOptions = () => {
  const themeConfig = {
    palette: palette(),
    typography: typography(),
    custom: {
      footerBorder: "60px",
      footerGap: "40px",
    },
  };

  return themeConfig;
};
