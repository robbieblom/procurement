import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";

export const GlobalLayout = ({ children }) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography variant={"h1"}>Header</Typography>
      <Container>{children}</Container>
      <Typography variant={"h1"}>Footer</Typography>
    </Box>
  );
};
