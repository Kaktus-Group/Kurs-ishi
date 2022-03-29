import { Container } from "@mui/material";
import React, { useState } from "react";
import pitsa from "../../../assets/images/buttonpPiz.svg";

function News() {
  return (
    <Container>
      <div>
        <p className="text-2xl font-bold my-6">News</p>

        <div className="flex justify-between align-center flex-wrap ">
          <div className="flex justify-around py-2 my-1 px-5 shadow-lg align-center gap-3 rounded-lg">
            <div>
              <img src={pitsa} alt="" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg font-semibold">Карбонара</p>
              <p className="text-yellow-400">от 120 ₽</p>
            </div>
          </div>
          <div className="flex justify-around py-2 px-5 shadow-lg align-center gap-3 rounded-lg">
            <div>
              <img src={pitsa} alt="" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg font-semibold">Карбонара</p>
              <p className="text-yellow-400">от 120 ₽</p>
            </div>
          </div>
          <div className="flex justify-around px-5 py-2 shadow-lg align-center gap-3 rounded-lg">
            <div>
              <img src={pitsa} alt="" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg font-semibold">Карбонара</p>
              <p className="text-yellow-400">от 120 ₽</p>
            </div>
          </div>
          <div className="flex justify-around px-5 py-2 shadow-lg align-center gap-3 rounded-lg">
            <div>
              <img src={pitsa} alt="" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg font-semibold">Карбонара</p>
              <p className="text-yellow-400">от 120 ₽</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default News;
