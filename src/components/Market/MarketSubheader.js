import { useMUIMediaQuery } from "@bytetheoryinnovations/bytetheory-ui-library/react/hooks";
import { Box, Button, Stack } from "@mui/material";
import React from "react";
import { useController } from "../../context/Controller";
import { appStore } from "../../stores/AppStore";

export const MarketSubheader = () => {
  const controller = useController();
  const buttonVariant = appStore((state) => state.getButtonVariant());
  const [setMarketBackdropOpen, setMarketBackdropText] = appStore((state) => [
    state.setMarketBackdropOpen,
    state.setMarketBackdropText,
  ]);

  const { isSmallTablet } = useMUIMediaQuery();

  const buyCheapest = async () => {
    try {
      await controller.buyCheapest();
    } catch (err) {
      console.log(err);
      setMarketBackdropOpen(true);
      setMarketBackdropText("You don't have enough money to buy any items.");
    }
  };

  const buyAsManyAsPossible = async () => {
    try {
      await controller.buyAsManyAsPossible();
    } catch (err) {
      console.log(err);
      setMarketBackdropOpen(true);
      setMarketBackdropText("You don't have enough money to buy any items.");
    }
  };

  return (
    <>
      <Stack direction={isSmallTablet ? "row" : "column"} spacing={2}>
        <Box>
          <Button
            variant={buttonVariant}
            size="small"
            onClick={buyCheapest}
            sx={{ whiteSpace: "nowrap", minWidth: "max-content" }}
          >
            Buy Cheapest
          </Button>
        </Box>

        <Box>
          <Button
            variant={buttonVariant}
            size="small"
            onClick={buyAsManyAsPossible}
            sx={{ whiteSpace: "nowrap", minWidth: "max-content" }}
          >
            Buy As Many As Possible
          </Button>
        </Box>
      </Stack>
    </>
  );
};
