import { Button } from "@mui/material";
import React from "react";
import { useController } from "../../context/Controller";
import { appStore } from "../../stores/AppStore";

export const SellRenderer = (props) => {
  const cellValue = props.valueFormatted ? props.valueFormatted : props.value;
  const controller = useController();
  const buttonVariant = appStore((state) => state.getButtonVariant());

  const sell = () => {
    controller.sellItemById(cellValue);
  };

  return (
    <Button variant={buttonVariant} size="extraSmall" onClick={sell}>
      Sell
    </Button>
  );
};
