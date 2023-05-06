import StoreIcon from "@mui/icons-material/Store";
import { Divider, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";

export const BusinessHeader = ({ businessName, netWorth }) => {
  return (
    <>
      <Grid2 container spacing={6} alignItems={"center"}>
        <Grid2 xs={1}>
          <StoreIcon color="primary" sx={{ fontSize: 40 }} />
        </Grid2>

        <Grid2>
          <Typography variant={"h4"}>{businessName}</Typography>
        </Grid2>

        <Grid2 xs={1} sx={{ textAlign: "right" }} flexGrow={1}>
          <Typography variant="h5">${netWorth}</Typography>
          <Typography color={"primary"}>Net Worth</Typography>
        </Grid2>
      </Grid2>
      <Divider style={{ marginTop: "8px" }} />
    </>
  );
};
