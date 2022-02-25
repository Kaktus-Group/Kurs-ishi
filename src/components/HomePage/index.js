import React from "react";
import YandexMap from "../Map";
import Aksiya from "./Aksiya";
import Location from "./Location";
import News from "./News";
import PicturePage from "./PicturePage";
import Products from "./Products";
import CenterMode from "./swiper";
const HomePage = () => {
  return (
    <div>
      <CenterMode />
      <News />
      <Products />
      <Products />
      <Products />
      <Aksiya />
      <Location />
    </div>
  );
};
export default HomePage;
