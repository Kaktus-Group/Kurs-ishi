import React from "react";
import Aksiya from "./Aksiya";
import Location from "./Location";
import Products from "./Products";
import CenterMode from "./swiper";
import Footer from "../Footer";
import Header from "../Header";
import { useSelector } from "react-redux";
import BasicAlerts from "../Modal/success";

const HomePage = () => {
  const alert = useSelector(state=>state.news.alert)
  return (
    <div>
      <Header />
      <CenterMode />
      <Products />
      <Aksiya />
      {/* <Location /> */}
      <Footer />
      {alert && <BasicAlerts />}
    </div>
  );
};
export default HomePage;
