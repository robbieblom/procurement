import { Button, Stack } from "@mui/material";
import React from "react";
import { useController } from "../../context/Controller";
import { appStore } from "../../stores/AppStore";

export const MarketSubheader = () => {
  const controller = useController();
  const buttonVariant = appStore((state) => state.getButtonVariant());

  const buyCheapest = async () => {
    controller.buyCheapest();
  };

  const buyAsManyAsPossible = async () => {
    controller.buyAsManyAsPossible();
  };

  return (
    <>
      <Stack direction={"row"} spacing={2}>
        <Button variant={buttonVariant} size="small" onClick={buyCheapest}>
          Buy Cheapest
        </Button>
        <Button
          variant={buttonVariant}
          size="small"
          onClick={buyAsManyAsPossible}
        >
          Buy As Many As Possible
        </Button>
      </Stack>
    </>
  );
};
