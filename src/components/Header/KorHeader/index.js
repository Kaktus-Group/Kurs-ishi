import { Box, Container } from "@mui/material";
import React from "react";
import logo from "../../../assets/log/logo.jpg";
import korzinka from "../../../assets/log/korzinka.jpg";
import { NavLink } from "react-router-dom";
export default function KorHeader() {
  return (
    <div style={{ width: "100%", borderBottom: "2px solid #ECECF1" }}>
      <Container sx={{ my: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <NavLink to="/">
            <img src={logo} />
          </NavLink>
          <img src={korzinka} />
        </Box>
      </Container>
    </div>
  );
}
