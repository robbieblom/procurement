import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";

export const BusinessSubheader = ({ moneyAmount, margin }) => {
  return (
    <Grid2 container>
      <Grid2 xs={6}>
        <Typography>${moneyAmount}</Typography>
      </Grid2>

      <Grid2 xs={6}>
        <div>${margin}</div>
        <Typography>Margin</Typography>
      </Grid2>
    </Grid2>
  );
};
