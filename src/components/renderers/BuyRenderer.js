import { Button } from "@mui/material";
import React from "react";
import { useController } from "../../context/Controller";
import { appStore } from "../../stores/AppStore";

export const BuyRenderer = (props) => {
  const cellValue = props.valueFormatted ? props.valueFormatted : props.value;
  const controller = useController();
  const buttonVariant = appStore((state) => state.getButtonVariant());

  const buy = () => {
    controller.buyItemById(cellValue);
  };

  return (
    <Button variant={buttonVariant} size="extraSmall" onClick={buy}>
      Buy
    </Button>
  );
};
