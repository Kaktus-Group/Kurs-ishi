import React from "react";
import UserProfile from "../components/UserProfile";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from "../components/HomePage";
import Header from "../components/Header";
import MyKor from "../components/Korzinka/Korzinka";
import SignUp from "../components/Modal/SignUp";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Carusel from "../components/Korzinka/slick";

function Root() {
  return (
    <div>
      {<BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign_up" element={<SignUp />}/>
          <Route path="/savat" element={<MyKor />} />
    
        </Routes> 

      </BrowserRouter>}
      {/* <Carusel /> */}
    </div>
  );
}

export default Root;
