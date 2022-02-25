import React from "react";
import Aksiya from "./Aksiya";
import News from "./News";
import Location from "./Location";
import Products from "./Products";
import CenterMode from "./swiper";
const HomePage = () => {
  return (
    <div>
      <CenterMode />
      <News />
      <Products />
      <Aksiya />
      <Location />
    </div>
  );
};
export default HomePage;
