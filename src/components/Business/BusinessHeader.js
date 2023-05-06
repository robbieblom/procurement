import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";

export const BusinessHeader = ({ businessName, netWorth }) => {
  return (
    <Grid2 container>
      <Grid2 xs={1}>
        <Typography>icon</Typography>
      </Grid2>

      <Grid2>
        <Typography variant={"h2"}>{businessName}</Typography>
      </Grid2>

      <Grid2 xs={1}>
        <div>${netWorth}</div>
        <Typography>Net Worth</Typography>
      </Grid2>
    </Grid2>
  );
};
