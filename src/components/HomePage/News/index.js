import { Box, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import pitsa from "../../../assets/images/buttonpPiz.svg";

function News() {
  return (
    <Container>
      <Box>
        <p className="text-2xl font-bold my-6">News</p>

        <Grid container spacing={3}>
          <Grid item xs={6} sm={4}  className="flex justify-between p-5 shadow-lg align-center rounded-lg">
            <div>
              <img src={pitsa} alt="" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg font-semibold">Карбонара</p>
              <p className="text-yellow-400">от 120 ₽</p>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} className="flex justify-around p-2  shadow-lg align-center rounded-lg">
            <div>
              <img src={pitsa} alt="" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg font-semibold">Карбонара</p>
              <p className="text-yellow-400">от 120 ₽</p>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} className="flex justify-around p-2 shadow-lg align-center rounded-lg">
            <div>
              <img src={pitsa} alt="" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg font-semibold">Карбонара</p>
              <p className="text-yellow-400">от 120 ₽</p>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} className="flex justify-around p-2 shadow-lg align-center rounded-lg">
            <div>
              <img src={pitsa} alt="" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg font-semibold">Карбонара</p>
              <p className="text-yellow-400">от 120 ₽</p>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default News;
