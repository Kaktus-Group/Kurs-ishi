import { Container, Typography } from "@mui/material";
import React from "react";
import Info from "./Info";
import Inputs from "./Inputs";
import Order from "./Order";
import Price from "./Price";

function OrderPage() {
  return (
    <div>
      <Container>
        <Container>
          <Typography
            sx={{
              color: "#F7D22D",
              fontSize: "32px",
              fontWeight: "800",
              mt: "20px",
            }}
          >
            Заказ на доставку
          </Typography>
        </Container>
        <Inputs />
        <Info />
        <Price />
        <Order />
      </Container>
    </div>
  );
}

export default OrderPage;
