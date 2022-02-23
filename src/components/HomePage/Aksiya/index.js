import { Button, Container, Paper, Typography } from "@mui/material";
import React from "react";
import Aks from "../../../assets/images/Aksiya.png";
import MinAks from "../../../assets/images/minAksiya.png";
import { useEffect } from "react";

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
        {/* <div className="flex flex-wrap justify-between align-center sm:flex sm:justify-center sm:flex-wrap">
          <div className="mt-4">
            <img src={Aks} alt="" />
          </div>
          <div className="mt-4">
            <div className="flex gap-4">
              <img src={MinAks} alt="" />
              <img src={MinAks} alt="" />
            </div>
            <div className="flex gap-4 mt-6">
              <img src={MinAks} alt="" />
              <img src={MinAks} alt="" />
            </div>
          </div>
        </div> */}
        <Paper>
          <Paper sx={{}}>
            <img src={Aks} alt="" />
          </Paper>
          <Paper>
            <Paper>
              <img src={MinAks} alt="" />
              <img src={MinAks} alt="" />
            </Paper>
            <Paper>
              <img src={MinAks} alt="" />
              <img src={MinAks} alt="" />
            </Paper>
          </Paper>
        </Paper>
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
