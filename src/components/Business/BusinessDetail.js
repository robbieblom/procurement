import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";

export const BusinessDetail = ({
  volumeSold,
  numberSold,
  avgSalePrice,
  volumePurchased,
  numberPurchased,
  avgPurchasePrice,
}) => {
  return (
    <>
      <Grid2 container>
        <Grid2 xs={4}>
          <Typography>${volumeSold}</Typography>
        </Grid2>

        <Grid2 xs={4}>
          <div>${numberSold}</div>
          <Typography>Margin</Typography>
        </Grid2>

        <Grid2 xs={4}>
          <div>${avgSalePrice}</div>
        </Grid2>

        <Grid2 xs={4}>
          <Typography>${volumePurchased}</Typography>
        </Grid2>

        <Grid2 xs={4}>
          <div>${numberPurchased}</div>
          <Typography>Margin</Typography>
        </Grid2>

        <Grid2 xs={4}>
          <div>${avgPurchasePrice}</div>
        </Grid2>
      </Grid2>
    </>
  );
};
