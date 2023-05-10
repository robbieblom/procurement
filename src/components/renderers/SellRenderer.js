import { Button } from "@mui/material";
import React from "react";
import { useController } from "../../context/Controller";

export const SellRenderer = (props) => {
  const cellValue = props.valueFormatted ? props.valueFormatted : props.value;
  const controller = useController();

  const sell = () => {
    controller.sellItemById(cellValue);
  };

  return (
    <Button variant="outlined" size="extraSmall" onClick={sell}>
      Sell
    </Button>
  );
};
