import { ByteTheoryTheme } from "@bytetheoryinnovations/bytetheory-ui-library";
import { Backdrop, Box, Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { appStore } from "../../stores/AppStore";

export const MarketBackdrop = ({ open, text }) => {
  const setMarketBackdropOpen = appStore(
    (state) => state.setMarketBackdropOpen
  );

  const handleClose = () => {
    setMarketBackdropOpen(false);
  };

  return (
    <Backdrop open={open}>
      <ByteTheoryTheme mode={"light"}>
        <Paper sx={{ maxWidth: "580px", padding: "40px" }}>
          <Stack spacing={3}>
            <Typography variant="body1">{text}</Typography>
            <Box>
              <Button variant="contained" onClick={handleClose}>
                OK
              </Button>
            </Box>
          </Stack>
        </Paper>
      </ByteTheoryTheme>
    </Backdrop>
  );
};
