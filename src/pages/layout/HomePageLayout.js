import { Box, Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";

export const HomePageLayout = ({
  businessSection,
  inventorySection,
  marketSection,
}) => {
  return (
    <>
      <Grid2
        container
        sx={{ height: "100vh", marginTop: "10px" }}
        direction={"row"}
        spacing={2}
      >
        <Grid2 xs={6}>
          <Stack sx={{ height: "100%" }} spacing={2}>
            <Box sx={{ height: "40%" }}>{businessSection}</Box>
            <Box sx={{ height: "60%" }}>{inventorySection}</Box>
          </Stack>
        </Grid2>

        <Grid2 xs={6}>
          <Box sx={{ height: "100%" }}>{marketSection}</Box>
        </Grid2>
      </Grid2>
    </>
  );
};
