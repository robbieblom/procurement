import { Box, Container, Typography } from "@mui/material";
import React from "react";

export const GlobalLayout = ({ children }) => {
  return (
    <Box>
      <Typography variant={"h1"}>Header</Typography>
      <Container>{children}</Container>
      <Typography variant={"h1"}>Footer</Typography>
    </Box>
  );
};
