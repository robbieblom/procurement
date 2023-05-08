import { Button } from "@mui/material";
import React from "react";

export const SellRenderer = (props) => {
  const cellValue = props.valueFormatted ? props.valueFormatted : props.value;

  const sell = () => {
    alert(`sold ${cellValue}`);
  };

  return (
    <Button variant="outlined" size="extraSmall" onClick={sell}>
      Sell
    </Button>
  );
};
