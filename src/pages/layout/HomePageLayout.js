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
        sx={{ marginTop: "10px", height: "100%" }}
        alignItems={"stretch"}
        direction={"row"}
        spacing={2}
      >
        <Grid2
          item
          container
          xs={12}
          md={6}
          direction={"column"}
          wrap="nowrap"
          spacing={2}
        >
          <Grid2>{businessSection}</Grid2>
          <Grid2 flexGrow={1}>{inventorySection}</Grid2>
        </Grid2>

        <Grid2 xs={12} md={6}>
          {marketSection}
        </Grid2>
      </Grid2>
    </>
  );
};
