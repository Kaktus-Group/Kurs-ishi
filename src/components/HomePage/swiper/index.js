import { Container } from "@mui/material";
import React, { Component } from "react";
import Slider from "react-slick";
import first from "../../../assets/images/swipperFir.svg";
import second from "../../../assets/images/swipperSec.svg";
export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "30px",
      slidesToShow: 3,

      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <div>
        <div className="p-3">
          <Slider {...settings}>
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
          </Slider>
        </div>
      </div>
    );
  }
}
