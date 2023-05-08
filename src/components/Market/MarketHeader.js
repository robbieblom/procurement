import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Divider, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";

export const MarketHeader = () => {
  return (
    <>
      <Grid2 container spacing={6} alignItems={"center"}>
        <Grid2 xs={1}>
          <ShoppingCartIcon color="primary" sx={{ fontSize: 35 }} />
        </Grid2>

        <Grid2>
          <Typography variant={"h4"} fontWeight={"bold"}>
            Supplier Market
          </Typography>
        </Grid2>
      </Grid2>
      <Divider style={{ marginTop: "8px" }} />
    </>
  );
};
