import { Card, Container, Typography } from "@mui/material";
import React from "react";

export const Market = () => {
  return (
    <Card
      sx={{
        height: "100%",
        backgroundColor: "secondary.main",
        color: "primary.contrastText",
      }}
    >
      <Container>
        <Typography variant={"h1"}>Market</Typography>
      </Container>
    </Card>
  );
};
