import WarehouseIcon from "@mui/icons-material/Warehouse";
import { Button, Divider, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { useController } from "../../context/Controller";
import { appStore } from "../../stores/AppStore";

export const InventoryHeader = () => {
  const controller = useController();
  const liquidate = async () => {
    controller.liquidateInventory();
  };

  const buttonVariant = appStore((state) => state.getButtonVariant());

  return (
    <>
      <Grid2 container spacing={6} alignItems={"center"}>
        <Grid2 xs={1}>
          <WarehouseIcon color="primary" sx={{ fontSize: 35 }} />
        </Grid2>

        <Grid2>
          <Typography variant={"h4"} fontWeight={"bold"}>
            Inventory
          </Typography>
        </Grid2>
        <Grid2 xs={1} sx={{ textAlign: "right" }} flexGrow={1}>
          <Button variant={buttonVariant} size="small" onClick={liquidate}>
            Liquidate
          </Button>
        </Grid2>
      </Grid2>
      <Divider style={{ marginTop: "8px" }} />
    </>
  );
};
