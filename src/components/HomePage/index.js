import React from "react";
import Aksiya from "./Aksiya";
import News from "./News";
import Location from "./Location";
import Products from "./Products";
import CenterMode from "./swiper";
import Footer from "../Footer";
import Header from "../Header";
const HomePage = () => {
  return (
    <div>
      <Header />
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
