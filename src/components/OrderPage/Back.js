import { ThemeProvider } from "@emotion/react";
import {  Button, Container, createMuiTheme, Typography } from "@mui/material";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight  } from "react-icons/fa";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F7D22D",
      contrastText: "#231F20",
      borderRadius: "10px",
      
    },
  },
});
function Back() {
  return (
    <Container sx={{ display: "flex", justifyContent: "space-between",my:2,alignItems:"center" }}>
      <Typography
        sx={{
          fontSize: "15px",
          color: "#231F20",
          opacity: 0.7,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <FaChevronLeft />
       <Typography > Сообщать о бонусах, акциях и новых продуктах  </Typography>
      </Typography>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          sx={{
            fontSize: "13px",
            fontWeight: "700",
            py:1
          }}
        >
          <Typography  sx={{
            fontSize: "13px",
            fontWeight: "700",
      
          }}> Оформить заказ на 1 048 ₽</Typography>
          <FaChevronRight />
        </Button>
      </ThemeProvider>
    </Container>
  );
}

export default Back;
