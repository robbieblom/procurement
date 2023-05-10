import { Button } from "@mui/material";
import React from "react";
import { useController } from "../../context/Controller";

export const BuyRenderer = (props) => {
  const cellValue = props.valueFormatted ? props.valueFormatted : props.value;
  const controller = useController();

  const buy = () => {
    controller.buyItemById(cellValue);
  };

  return (
    <Button variant="outlined" size="extraSmall" onClick={buy}>
      Buy
    </Button>
  );
};
