import { Box, Container, useMediaQuery } from "@mui/material";

import React, { Component } from "react";
import Slider from "react-slick";
import first from "../../../assets/images/swipperFir.svg";
import second from "../../../assets/images/swipperSec.svg";
export default function CenterMode() {
  const lg = useMediaQuery('(min-width: 900px)');
  const xs = useMediaQuery('(max-width: 600px)');

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "40px",
    slidesToShow: 2,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const settingsLg = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "40px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const settingsXs = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "40px",
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Box sx={{ overflow: "hidden" }}>
      {xs ? <Slider {...settingsXs}>
        <div>
          <img src={first} alt="" className="overflow-hidden" />
        </div>
        <div>
          <img src={second} alt="" className="overflow-hidden" />
        </div>
        <div>
          <img src={first} alt="" className="overflow-hidden" />
        </div>
        <div>
          <img src={second} alt="" className="overflow-hidden" />
        </div>
        <div>
          <img src={first} alt="" className="overflow-hidden" />
        </div>
        <div>
          <img src={second} alt="" className="overflow-hidden" />
        </div>
      </Slider> : lg ? <Slider {...settingsLg}>
        <div>
          <img src={first} alt="" className="overflow-hidden" />
        </div>
        <div>
          <img src={second} alt="" className="overflow-hidden" />
        </div>
        <div>
          <img src={first} alt="" className="overflow-hidden" />
        </div>
        <div>
          <img src={second} alt="" className="overflow-hidden" />
        </div>
        <div>
          <img src={first} alt="" className="overflow-hidden" />
        </div>
        <div>
          <img src={second} alt="" className="overflow-hidden" />
        </div>
      </Slider> : <Slider {...settings}>
        <div>
          <img src={first} alt="" className="overflow-hidden" />
        </div>
        <div>
          <img src={second} alt="" className="overflow-hidden" />
        </div>
        <div>
          <img src={first} alt="" className="overflow-hidden" />
        </div>
        <div>
          <img src={second} alt="" className="overflow-hidden" />
        </div>
        <div>
          <img src={first} alt="" className="overflow-hidden" />
        </div>
        <div>
          <img src={second} alt="" className="overflow-hidden" />
        </div>
      </Slider>}
    </Box>
  );
}
