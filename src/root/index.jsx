import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from "../components/HomePage";
import MyKor from "../components/Korzinka/Korzinka";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/savat" element={<MyKor />} />

        </Routes>

       </BrowserRouter>
    </Provider>
  );
}

export default Root;
