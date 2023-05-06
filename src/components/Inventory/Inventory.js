import { Card, Container, Typography } from "@mui/material";
import React from "react";

export const Inventory = () => {
  return (
    <Card
      sx={{
        height: "100%",
        // backgroundColor: "secondary.main",
        // color: "primary.contrastText",
      }}
    >
      <Container>
        <Typography variant={"h1"}>Inventory</Typography>
      </Container>
    </Card>
  );
};
