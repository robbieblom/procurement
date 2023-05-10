import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { formatToCurrency } from "../../utils/utils";

export const BusinessSubheader = ({ moneyAmount, margin }) => {
  return (
    <>
      <Grid2 container>
        <Grid2 xs={4}>
          <Typography variant="h6">{formatToCurrency(moneyAmount)}</Typography>
          <Typography color={"primary"}>Cash Available</Typography>
        </Grid2>

        <Grid2 xs={8}>
          <Typography variant="h6">{formatToCurrency(margin)}</Typography>
          <Typography color={"primary"}>Margin</Typography>
        </Grid2>
      </Grid2>
    </>
  );
};
