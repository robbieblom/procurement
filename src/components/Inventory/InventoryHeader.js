import WarehouseIcon from "@mui/icons-material/Warehouse";
import { Box, Button, Divider, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useState } from "react";
import { appStore } from "../../stores/AppStore";

export const InventoryHeader = ({ items }) => {
  const setLiquidateBackdropOpen = appStore(
    (state) => state.setLiquidateBackdropOpen
  );
  const [inlineMessage, _setInlineMessage] = useState("");
  const setInlineMessage = (msg) => {
    _setInlineMessage(msg);
    setTimeout(() => {
      _setInlineMessage("");
    }, "5000");
  };

  const inventoryContainsItems = () => {
    return Boolean(items.length);
  };
  const liquidate = async () => {
    inventoryContainsItems()
      ? setLiquidateBackdropOpen(true)
      : setInlineMessage("No items to liquidate!");
  };

  const buttonVariant = appStore((state) => state.getButtonVariant());

  return (
    <>
      <Grid2 container spacing={2} alignItems={"center"}>
        <Grid2 xs={1}>
          <WarehouseIcon color="primary" sx={{ fontSize: 35 }} />
        </Grid2>

        <Grid2>
          <Typography variant={"h4"} fontWeight={"bold"}>
            Inventory
          </Typography>
        </Grid2>
        <Grid2 xs={1} sx={{ textAlign: "right" }} flexGrow={1}>
          <Box>
            {inlineMessage && (
              <Typography
                variant="caption"
                fontWeight="bold"
                color="primary.main"
                sx={{ marginRight: "15px" }}
              >
                {inlineMessage}
              </Typography>
            )}
            <Button variant={buttonVariant} size="small" onClick={liquidate}>
              Liquidate
            </Button>
          </Box>
        </Grid2>
      </Grid2>
      <Divider style={{ marginTop: "8px" }} />
    </>
  );
};
