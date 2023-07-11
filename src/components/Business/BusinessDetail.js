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
      <Grid2 container spacing={1}>
        <Grid2 smallMobile={4}>
          <Typography variant="h6">${volumeSold}</Typography>
          <Typography color={"text.secondary"}>Volume Sold</Typography>
        </Grid2>

        <Grid2 smallMobile={4}>
          <Typography variant="h6">{numberSold}</Typography>
          <Typography color={"text.secondary"}>Units Sold</Typography>
        </Grid2>

        <Grid2 smallMobile={4}>
          <Typography variant="h6">
            {avgSalePrice ? `$${avgSalePrice}` : "N/A"}
          </Typography>
          <Typography color={"text.secondary"}>Avg. Sale Price</Typography>
        </Grid2>

        <Grid2 smallMobile={4}>
          <Typography variant="h6">${volumePurchased}</Typography>
          <Typography color={"text.secondary"}>Volume Purchased</Typography>
        </Grid2>

        <Grid2 smallMobile={4}>
          <Typography variant="h6">{numberPurchased}</Typography>
          <Typography color={"text.secondary"}>Units Purchased</Typography>
        </Grid2>

        <Grid2 smallMobile={4}>
          <Typography variant="h6">
            {avgPurchasePrice ? `$${avgPurchasePrice}` : "N/A"}
          </Typography>
          <Typography color={"text.secondary"}>Avg. Purchase Price</Typography>
        </Grid2>
      </Grid2>
    </>
  );
};
