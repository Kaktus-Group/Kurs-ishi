import { Button, Container, Paper, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import ImageAksiya from "./ImageAksiya";

function Aksiya() {
  useEffect(() => {
    console.log("componentDidMount");
  });
  return (
    <div>
      <Container>
        <Typography
          sx={{
            mt: "60px",
            mb: "35px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              color: "black",
              fontWeight: "600",
            }}
            variant="h4"
          >
            Наши
          </Typography>
          <Typography
            sx={{
              color: "#F7D22D",
              fontWeight: "600",
            }}
            variant="h4"
          >
            акции
          </Typography>
        </Typography>
        <ImageAksiya />
        <div className="flex justify-center">
          <Button
            variant="contained"
            sx={{
              borderRadius: "23px !important",
              minWidth: "160px",
              mt: "60px",
              background: "#F7D22D !important",
              padding: "6px 16px",
            }}
          >
            Все вкции
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Aksiya;
