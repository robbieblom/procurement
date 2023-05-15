import { ByteTheoryTheme } from "@bytetheoryinnovations/bytetheory-ui-library";
import { Backdrop, Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { useController } from "../../context/Controller";
import { appStore } from "../../stores/AppStore";

export const LiquidateBackdrop = ({ open }) => {
  const controller = useController();
  const setLiquidateBackdropOpen = appStore(
    (state) => state.setLiquidateBackdropOpen
  );

  const handleCancel = () => {
    setLiquidateBackdropOpen(false);
  };

  const handleConfirm = async () => {
    setLiquidateBackdropOpen(false);
    controller.liquidateInventory();
  };

  return (
    <Backdrop open={open} sx={{ zIndex: 100 }}>
      <ByteTheoryTheme mode={"light"}>
        <Paper sx={{ maxWidth: "580px", padding: "40px" }}>
          <Stack spacing={2}>
            <Typography variant="h6">Are you sure?</Typography>
            <Typography variant="body1">
              Liquidation will sell your inventory at 85% of the normal sale
              price. You will sell at a loss.
            </Typography>
            <Stack spacing={2} direction={"row"}>
              <Button variant="contained" onClick={handleConfirm}>
                Yes
              </Button>
              <Button variant="contained" onClick={handleCancel}>
                Cancel
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </ByteTheoryTheme>
    </Backdrop>
  );
};
