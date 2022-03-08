import { CardMedia, Container, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";
import Slider from "react-slick";
import pizza from "../../../assets/images/buttonpPiz.svg";
export default function SimpleSlider() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <Slider {...settings}>
        <Paper
          sx={{
            py: 1,
            px: 3,
            border: "1.5px solid #E2E2E9",
            borderRadius: "12px",
          }}
        >
          <CardMedia
            sx={{ width: "71px", objectFit: "cover" }}
            component="img"
            image="https://io.bellissimo.uz/images/07b2af79-95e0-48ae-8962-3b29fdfcb6d4.jpg"
            alt="Pitsas"
          />
          <Box>
            <Typography sx={{ fontSize: "13px", fontWeight: 600 }}>
              Молочный коктель с приятным аро...
            </Typography>
            <Typography
              sx={{ color: "#FF2E65", fontSize: "17px", fontWeight: 700 }}
            >
              от 120 ₽
            </Typography>
          </Box>
        </Paper>
        <Paper
          sx={{
            py: 1,
            px: 3,
            border: "1.5px solid #E2E2E9",
            borderRadius: "12px",
          }}
        >
          <CardMedia
            sx={{ width: "71px", objectFit: "cover" }}
            component="img"
            image="https://io.bellissimo.uz/images/07b2af79-95e0-48ae-8962-3b29fdfcb6d4.jpg"
            alt="Pitsas"
          />
          <Box>
            <Typography sx={{ fontSize: "13px", fontWeight: 600 }}>
              Молочный коктель с приятным аро...
            </Typography>
            <Typography
              sx={{ color: "#FF2E65", fontSize: "17px", fontWeight: 700 }}
            >
              от 120 ₽
            </Typography>
          </Box>
        </Paper>
        <Paper
          sx={{
            py: 1,
            px: 3,
            border: "1.5px solid #E2E2E9",
            borderRadius: "12px",
          }}
        >
          <CardMedia
            sx={{ width: "71px", objectFit: "cover" }}
            component="img"
            image="https://io.bellissimo.uz/images/07b2af79-95e0-48ae-8962-3b29fdfcb6d4.jpg"
            alt="Pitsas"
          />
          <Box>
            <Typography sx={{ fontSize: "13px", fontWeight: 600 }}>
              Молочный коктель с приятным аро...
            </Typography>
            <Typography
              sx={{ color: "#FF2E65", fontSize: "17px", fontWeight: 700 }}
            >
              от 120 ₽
            </Typography>
          </Box>
        </Paper>
        <Paper
          sx={{
            py: 1,
            px: 3,
            border: "1.5px solid #E2E2E9",
            borderRadius: "12px",
          }}
        >
          <CardMedia
            sx={{ width: "71px", objectFit: "cover" }}
            component="img"
            image="https://io.bellissimo.uz/images/07b2af79-95e0-48ae-8962-3b29fdfcb6d4.jpg"
            alt="Pitsas"
          />
          <Box>
            <Typography sx={{ fontSize: "13px", fontWeight: 600 }}>
              Молочный коктель с приятным аро...
            </Typography>
            <Typography
              sx={{ color: "#FF2E65", fontSize: "17px", fontWeight: 700 }}
            >
              от 120 ₽
            </Typography>
          </Box>
        </Paper>
      </Slider>
    </div>
  );
}
