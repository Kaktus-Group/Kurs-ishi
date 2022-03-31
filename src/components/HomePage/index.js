import React from "react";
import Aksiya from "./Aksiya";
import News from "./News";
import Location from "./Location";
import Products from "./Products";
import CenterMode from "./swiper";
import Footer from "../Footer";
import Header from "../Header";
import { Button, Container, Link } from "@mui/material";
import Delivery from "../Modal/Delivery";
import { useSelector } from "react-redux";

const HomePage = () => {
  const Store = useSelector(state=>state)
  console.log(Store);
  return (
    <div>
      <Header />
      <Delivery />
      <CenterMode />
      <News />
      <Products />
      <Aksiya />
      <Location />
      <Footer />
    </div>
  );
};
export default HomePage;
