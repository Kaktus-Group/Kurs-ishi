import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OrderPage from "../components/OrderPage";
import HomePage from "../components/HomePage";
import SignUp from "../components/Modal/SignUp";
import UserProfile from "../components/UserProfile";

function Root() {
  return (
    <div>
      <HomePage />
      {/* <SignUp /> */}
      {/* <UserProfile /> */}
    </div>
  );
}

export default Root;
