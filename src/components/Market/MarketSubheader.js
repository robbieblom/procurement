import { Button, Stack } from "@mui/material";
import React from "react";
import { useController } from "../../context/Controller";

export const MarketSubheader = () => {
  const controller = useController();

  const buyCheapest = async () => {
    controller.buyCheapest();
  };

  const buyAsManyAsPossible = async () => {
    controller.buyAsManyAsPossible();
  };

  return (
    <>
      <Stack direction={"row"} spacing={2}>
        <Button variant="outlined" size="small" onClick={buyCheapest}>
          Buy Cheapest
        </Button>
        <Button variant="outlined" size="small" onClick={buyAsManyAsPossible}>
          Buy As Many As Possible
        </Button>
      </Stack>
    </>
  );
};
