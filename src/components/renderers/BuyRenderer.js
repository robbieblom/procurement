import { Button } from "@mui/material";
import React from "react";
import { useController } from "../../context/Controller";
import { appStore } from "../../stores/AppStore";

export const BuyRenderer = (props) => {
  const cellValue = props.valueFormatted ? props.valueFormatted : props.value;
  const controller = useController();
  const buttonVariant = appStore((state) => state.getButtonVariant());
  const [setMarketBackdropOpen, setMarketBackdropText] = appStore((state) => [
    state.setMarketBackdropOpen,
    state.setMarketBackdropText,
  ]);

  const buy = async () => {
    try {
      await controller.buyItemById(cellValue);
    } catch (err) {
      console.log(err);
      setMarketBackdropOpen(true);
      setMarketBackdropText("You don't have enough money to buy this item.");
    }
  };

  return (
    <Button variant={buttonVariant} size="extraSmall" onClick={buy}>
      Buy
    </Button>
  );
};
