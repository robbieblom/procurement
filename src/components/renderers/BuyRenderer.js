import { Button } from "@mui/material";
import React from "react";

export const BuyRenderer = (props) => {
  const cellValue = props.valueFormatted ? props.valueFormatted : props.value;

  const buy = () => {
    alert(`bought ${cellValue}`);
  };

  return (
    <Button variant="outlined" size="extraSmall" onClick={buy}>
      Buy
    </Button>
  );
};
