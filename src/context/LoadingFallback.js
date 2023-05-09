import { CircularProgress, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useController } from "./Controller";

export const loading = (
  <>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Stack direction="column" spacing={9}>
        <CircularProgress
          disableShrink
          color="primary"
          size={150}
          sx={{ alignSelf: "center" }}
        />
        <Typography variant="h5">Loading the simulation...</Typography>
      </Stack>
    </Box>
  </>
);

export const LoadingFallback = ({ children }) => {
  const controller = useController();

  if (controller != null) {
    return <>{children}</>;
  } else {
    return <>{loading}</>;
  }
};
