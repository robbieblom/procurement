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
        paddingTop: "16px",
        paddingBottom: "16px",
      }}
      elevation={10}
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
