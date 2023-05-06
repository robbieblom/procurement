import { Card, Container, Stack } from "@mui/material";
import React from "react";

export const BusinessLayout = ({
  businessHeader,
  businessSubheader,
  businessDetail,
}) => {
  return (
    <Card
      sx={{
        height: "100%",
        backgroundColor: "secondary.main",
        color: "primary.contrastText",
      }}
    >
      <Container>
        <Stack spacing={2}>
          {businessHeader}
          {businessSubheader}
          {businessDetail}
        </Stack>
      </Container>
    </Card>
  );
};
