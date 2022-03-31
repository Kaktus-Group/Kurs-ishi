import { Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import First from "../../../assets/images/LocationFir.svg";
import Second from "../../../assets/images/secLocation.svg";
import Third from "../../../assets/images/thirdLoc.svg";
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
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
            <img src={First} alt="" />

            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <img src={Second} alt="" />

            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <img src={Third} alt="" />

            </Grid>
            </Grid>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <YandexMap />
          </Box>
        </Container>
      </Paper>
    </div>
  );
}

export default Location;
