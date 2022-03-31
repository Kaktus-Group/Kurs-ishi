import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function BasicAlerts() {
  return (
    <Stack
      sx={{ width: "300px", position: "fixed", bottom: "20px", left: "45%", }}
      spacing={2}
    >
      <Alert severity="success" sx={{
        fontSize:"18px",
        fontWeight:700
      }}>Ваш заказ принят!</Alert>
    </Stack>
  );
}
