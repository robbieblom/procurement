import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Footer } from "../../components/Footer/Footer";

export const GlobalLayout = ({ children }) => {
  return (
    <Box>
      <Typography variant={"h1"}>Header</Typography>
      <Container maxWidth="xl">
        {children}
        <Footer />
      </Container>
    </Box>
  );
};
