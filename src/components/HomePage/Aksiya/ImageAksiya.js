import { Box, Container } from "@mui/material";
import React from "react";
import Big from "../../../assets/images/AksiyaBig.svg";
import Small from "../../../assets/images/AksiyaMin.svg";
function ImageAksiya() {
  return (
    <div>
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <img src={Big} alt="" />
        </Box>
        <Box>
          <img src={Small} alt="" />
          <img src={Small} alt="" className="mt-6" />
        </Box>
        <Box>
          <img src={Small} alt="" />
          <img src={Small} alt="" className="mt-6" />
        </Box>
      </Container>
    </div>
  );
}

export default ImageAksiya;
