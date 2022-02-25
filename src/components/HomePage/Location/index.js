import { Container, Paper, Typography } from "@mui/material";
import React from "react";
import LocFirst from "../../../assets/images/LocFirst.png";
import YandexMaps from "../../Map";
function Location() {
  return (
    <div>
      <Paper sx={{ background: "#E3ECF5", mt: "60px", mb: "30px" }}>
        <Container sx={{ pt: "30px" }}>
          <Typography
            sx={{
              color: "#F7D22D",
              fontWeight: "800",
              textAlign: "center",
              fontSize: "30px",
              mb: "60px",
            }}
          >
            Оплата и доставка
          </Typography>
          <div className="flex align-center justify-between flex-wrap mb-4">
            <img src={LocFirst} alt="" />
            <img src={LocFirst} alt="" />
            <img src={LocFirst} alt="" />
          </div>
          <YandexMaps />
        </Container>
      </Paper>
    </div>
  );
}

export default Location;
