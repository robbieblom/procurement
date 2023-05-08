import { Card, Container, Stack } from "@mui/material";
import React from "react";

export const Tile = ({ header, subheader, detail }) => {
  return (
    <Card
      sx={{
        height: "100%",
        paddingTop: "16px",
        paddingBottom: "16px",
      }}
      elevation={10}
    >
      <Container sx={{ height: "100%" }}>
        <Stack spacing={2} sx={{ height: "100%" }}>
          {header}
          {subheader}
          {detail}
        </Stack>
      </Container>
    </Card>
  );
};
