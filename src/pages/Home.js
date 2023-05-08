import React from "react";
import { BusinessTile } from "../components/Business/BusinessTile";
import { InventoryTile } from "../components/Inventory/InventoryTile";
import { MarketTile } from "../components/Market/MarketTile";
// import { useController } from "../context/Controller";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { appStore } from "../stores/AppStore";

export const Home = () => {
  // controller.createBusiness("Acme Innovations", 500);
  // const controller = useController();
  const business = appStore((state) => state.business);

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
          <Grid2>
            <BusinessTile business={business} />
          </Grid2>
          <Grid2 flexGrow={1}>
            <InventoryTile inventory={business.inventory} />
          </Grid2>
        </Grid2>

        <Grid2 xs={12} md={6}>
          <MarketTile market={business.market} />
        </Grid2>
      </Grid2>
    </>
  );
};
