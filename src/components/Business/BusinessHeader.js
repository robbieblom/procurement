import BusinessIcon from "@mui/icons-material/Business";
import { Divider, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { formatToCurrency } from "../../utils/utils";

export const BusinessHeader = ({ businessName, netWorth }) => {
  return (
    <>
      <Grid2 container spacing={1} alignItems={"center"}>
        <Grid2 xs={1}>
          <BusinessIcon color="primary" sx={{ fontSize: 39 }} />
        </Grid2>

        <Grid2>
          <Typography variant={"h4"} fontWeight={"bold"}>
            {businessName}
          </Typography>
        </Grid2>

        <Grid2 xs={1} sx={{ textAlign: "right" }} flexGrow={1}>
          <Typography variant="h5">{formatToCurrency(netWorth)}</Typography>
          <Typography color={"primary"}>Net Worth</Typography>
        </Grid2>
      </Grid2>
      <Divider style={{ marginTop: "8px" }} />
    </>
  );
};
