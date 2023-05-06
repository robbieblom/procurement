import { palette } from "./palette";
import { typography } from "./typography";

export const themeOptions = () => {
  const themeConfig = {
    palette: palette(),
    typography: typography(),
  };

  return themeConfig;
};
