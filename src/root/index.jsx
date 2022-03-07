import React from "react";
import UserProfile from "../components/UserProfile";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from "../components/HomePage";

import Header from "../components/Header";
import MyKor from "../components/Korzinka/Korzinka";
function Root() {
  return (
    <div>
      {/* <Header />
      <MyKor /> */}
      <HomePage />
    </div>
  );
}

export default Root;
