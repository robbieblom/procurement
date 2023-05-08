import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

export const NavModuleStyles = styled("nav")(({ theme }) => {
  const css = `
  .nav {
    padding-top: 10px;
    padding-bottom: 10px;

    @media (min-width: 1024px) {
      padding-top: 30px;
      padding-bottom: 20px;
    }
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  .menu {
    background-color: #000;
    width: ${theme.custom.navMenuWidth};
    transform: translateX(calc(${theme.custom.navMenuWidth} * -1));
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    z-index: 99;
    padding: 30px ${theme.custom.navBorderSpacing};
    display: flex;
    align-items: center;
  }
`;
  return css;
});

export const NavTopLevel = styled("ul")(({ theme }) => {
  const css = `
    list-style: none;
    padding: 0;
    margin: 0;

    > li,
    > li > button {
      text-transform: capitalize;
      font-size: ${theme.typography.h2.fontSize};
      font-weight: 700;
      cursor: pointer;
      transition: color 0.3s ease;

      a {
        text-decoration: none;
        color: #fff;
      }

      span {
        color: ${theme.palette.primary.main};
      }

      &:hover {
        color: ${theme.palette.primary.main};
        > a {
          color: ${theme.palette.primary.main};
        }
      }
    }

    > li {
      &.open {
        > button > svg {
          transform: rotate(180deg);
        }
      }
    }

    > li > button {
      background-color: transparent;
      padding: 0;
      color: #fff;
      border: none;
      font-family: "Heebo", sans-serif;
      display: flex;
      align-items: center;
    }

    > li > button > svg {
      font-size: 22px;
      margin-left: 6px;
      color: ${theme.palette.primary.main};
      transition: transform 0.3s ease;

      @media (min-width: 768px) {
        font-size: 26px;
      }

      @media (min-width: 1024px) {
        font-size: 30px;
      }
    }
  `;
  return css;
});

export const HamburgerStyles = styled(motion.button)(({ theme }) => {
  const css = `
  background-color: transparent;
  border: none;
  width: 30px;
  height: 30px;
  padding: 0;
  cursor: pointer;
  outline: none;

  &:focus {
    border: none;
    outline: none;
  }

  .bar {
    display: block;
    background-color: #fff;
    height: 2px;
    border-radius: 2px;

    &:nth-of-type(2) {
      margin-top: 8px;
      margin-bottom: 8px;
    }
  }
`;
  return css;
});

export const LogoStyles = styled("div")(({ theme }) => {
  const css = `
  font-weight: 700;
  font-size: 20px;
  letter-spacing: -0.5px;

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  @media (min-width: 1024px) {
    font-size: 25px;
  }

  span {
    color: ${theme.palette.primary.main};
  }

  &:hover,
  &:focus {
    a {
      color: ${theme.palette.primary.main};
    }
  }
`;
  return css;
});
