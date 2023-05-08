import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  barOneVariants,
  barThreeVariants,
  barTwoVariants,
  menuList,
} from "./NavAnim";
import { menuItems } from "./NavConstants";
import {
  HamburgerStyles,
  LogoStyles,
  NavModuleStyles,
  NavTopLevel,
} from "./NavModuleStyles";

const NavModule = () => {
  const [isOpen, setNav] = useState(false);

  const toggleNav = () => {
    setNav((isOpen) => !isOpen);
  };

  const title = "ByteTheory Innovations";

  return (
    <>
      <NavModuleStyles>
        <div className="nav">
          <div className="container">
            <HamburgerStyles
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              onClick={toggleNav}
              onKeyDown={toggleNav}
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              className={isOpen ? " open" : ""}
            >
              <motion.span
                className="bar"
                variants={barOneVariants}
              ></motion.span>
              <motion.span
                className="bar"
                variants={barTwoVariants}
              ></motion.span>
              <motion.span
                className="bar"
                variants={barThreeVariants}
              ></motion.span>
            </HamburgerStyles>

            {title && (
              <LogoStyles>
                <a to="/">
                  {title}
                  <span>.</span>
                </a>
              </LogoStyles>
            )}
          </div>
        </div>
        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuList}
          transition={{ type: "ease", stiffness: 50, velocity: 50 }}
          className="menu"
        >
          <NavTopLevel>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  onClick={toggleNav}
                  onKeyDown={toggleNav}
                  to={item.path}
                  className="menu__item--active"
                >
                  <Typography variant="h2">
                    {item.text}
                    <span>.</span>
                  </Typography>
                </a>
              </li>
            ))}
          </NavTopLevel>
        </motion.div>
      </NavModuleStyles>
    </>
  );
};

export default NavModule;
