import { Container, Paper, Typography } from "@mui/material";
import React from "react";
import First from "../../../assets/images/LocationFir.svg";
import Second from "../../../assets/images/secLocation.svg";
import Third from "../../../assets/images/thirdLoc.svg";
import Fourth from "../../../assets/images/34.svg";
import YandexMap from "./Map";
import { Box } from "@mui/system";
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
            <img src={First} alt="" />
            <img src={Second} alt="" />
            <img src={Third} alt="" />
            {/* <img src={Fourth} alt="" /> */}
          </div>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <YandexMap />
          </Box>
        </Container>
      </Paper>
    </div>
  );
}

export default Location;
