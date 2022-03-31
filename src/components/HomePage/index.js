import React from "react";
import Aksiya from "./Aksiya";
import Location from "./Location";
import Products from "./Products";
import CenterMode from "./swiper";
import Footer from "../Footer";
import Header from "../Header";
import { Button, Container, Link } from "@mui/material";
import TimeDelivery from "../Modal/TimeDelevery";
import Order from "../Modal/Order";

const HomePage = () => {
  return (
    <div>
      <Header />
      <CenterMode />
      <Products />
      <Aksiya />
      <Location />
      <Footer />
    </div>
  );
};
export default HomePage;
