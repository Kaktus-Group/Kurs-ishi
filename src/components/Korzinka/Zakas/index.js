import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Delivery from "../../Modal/Delivery";
import Success from "../../Modal/success";

export default function Promokod() {
  const korzinka = useSelector((state) => state.news.korzinka);
  console.log(korzinka);
  var summa = 0;
  korzinka.map((item) => {
    summa += item.count * item.price;
  });
  console.log(summa);

  const [auth, setAuth] = React.useState(false);
  const [finish, setFinish] = React.useState(false)
  const disableAuth = () => setAuth(false);

  return (
    <Box
      sx={{
        my: 2,
      }}
    >
      <Typography
        sx={{
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: "22px",
          lineHeight: "17px",
          color: "#FF2E65",
        }}
      >
        Промокод
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", sm: "space-between" },
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            my: 2,
            border: "1.5px solid #E2E2E9",
            boxSizing: "border-box",
            borderRadius: "8px",
          }}
        >
          <input placeholder="Введите промокод" />
          <Button
            variant="contained"
            color="warning"
            sx={{
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "13px",
              lineHeight: "28px",
              color: "#231f20",
              textTransform: "capitalize",
            }}
          >
            {" "}
            Применить
          </Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "17px",
              color: "#0E0C0D",
            }}
          >
            Сумма заказа:
          </Typography>
          <Typography
            sx={{
              fontStyle: "normal",
              fontWeight: 800,
              fontSize: "36px",
              lineHeight: "44px",
              color: "#F7D22D",
              marginLeft: 2,
            }}
          >
            {summa} ₽
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", sm: "space-between" },
          flexWrap: "wrap",
        }}
      >
        <NavLink to="/">
          <Button>
            <Typography
              sx={{
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "15px",
                lineHeight: "28px",
                color: "#696F7A",
                textTransform: "capitalize",
              }}
            >
              Вернуться в магазин
            </Typography>
          </Button>
        </NavLink>
        <Button variant="contained" color="warning">
          <Typography
            onClick={() => setAuth(true)}
            sx={{
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "15px",
              lineHeight: "28px",
              color: " #231F20",
              textTransform: "capitalize",
            }}
          >
            Оформить заказ
          </Typography>
        </Button>
      </Box>

      {auth && <Delivery isAuth={disableAuth} finish={setFinish}/>}
    </Box>
  );
}
