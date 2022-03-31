import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Big from "../../../assets/images/AksiyaBig.svg";
import Small from "../../../assets/images/AksiyaMin.svg";
function ImageAksiya() {
  return (
    <div>
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
          <Box>
          <img src={Big} alt="" />
        </Box>
          </Grid>
          <Grid item  xs={12} sm={6}>
          <Grid container spacing={2}>
          <Grid item xs={6} sm={6}>
          <Box>
          <img src={Small} alt="" />
          <img src={Small} alt="" className="mt-6" />
        </Box>
        </Grid>
        <Grid item xs={6} sm={6}>
        <Box>
          <img src={Small} alt="" />
          <img src={Small} alt="" className="mt-6" />
        </Box>
      </Grid> </Grid>  </Grid>
        </Grid>
        
        
      </Container>
    </div>
  );
}

export default ImageAksiya;
