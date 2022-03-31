import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from "../components/HomePage";
import UserProfile from "../components/UserProfile"
import MyKor from "../components/Korzinka/Korzinka";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/savat" element={<MyKor />} />
          <Route path="/user" element={<UserProfile />}/>
        </Routes>

       </BrowserRouter>
    </Provider>
  );
}

export default Root;
