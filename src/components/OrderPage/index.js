import { Container, } from "@mui/material";
import React from "react";
import Back from "./Back";
import Info from "./Info";
import Inputs from "./Inputs";
import Order from "./Order";
import Price from "./Price";
import PriceCard from "./PriceCard";
import Title from "./Title";

function OrderPage() {
  return (
    <div>
      <Container sx={{display:"flex",justifyContent:"space-between",}}>
       <Container sx={{minWidth:"850px"}}>
       <Title/>
        <Inputs />
        <Info />
        <Price />
        <Order />
        <Back />
       </Container>
       <Container>
         <PriceCard/>
       </Container>
      </Container>
    </div>
  );
}

export default OrderPage;
