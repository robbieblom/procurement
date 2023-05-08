import { Button, Stack } from "@mui/material";
import React from "react";

export const MarketSubheader = () => {
  return (
    <>
      <Stack direction={"row"} spacing={2}>
        <Button variant="outlined" size="small">
          Buy Cheapest
        </Button>
        <Button variant="outlined" size="small">
          Buy As Many As Possible
        </Button>
      </Stack>
    </>
  );
};
