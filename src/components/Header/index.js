import { Button, Container, createTheme, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import DataProducts from "../../redux/reducers/DataProducts";
import logo from "../../assets/log/logo.jpg";
import little from "../../assets/log/little.png";
import yulduz from "../../assets/log/yulduz.png";
import { NavLink } from "react-router-dom";
import SignUp from "../Modal/SignUp";
import { yellow } from "@mui/material/colors";

export default function Header() {
  const [auth, setAuth] = React.useState(false);
  console.log(auth);
  const disableAuth = () => setAuth(false);

  return (
    <Container
      sx={{
        mt: 1,
        mb: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 8,
          }}
        >
          <img src={logo} />
          <Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography
                sx={{
                  color: "#231F20",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "17px",
                  lineHeight: "21px",
                }}
              >
                Доставка пасты
              </Typography>
              <Typography
                sx={{
                  color: "#F7D22D",
                }}
              >
                Tashkent
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <img src={little} alt="" />
              <Typography
                sx={{
                  color: "#231F20",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "13px",
                  lineHeight: "26px",
                }}
              >
                Яндекс еда
              </Typography>
              <Box
                sx={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "#FFC816",
                }}
              ></Box>
              <Typography
                sx={{
                  color: "#231F20",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "13px",
                  lineHeight: "26px",
                }}
              >
                4.8
              </Typography>
              <img src={yulduz} alt="" />
              <Typography
                sx={{
                  color: "#231F20",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "13px",
                  lineHeight: "26px",
                }}
              >
                Время доставки
              </Typography>
              <Box
                sx={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "#FFC816",
                }}
              ></Box>
              <Typography
                sx={{
                  color: "#231F20",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "13px",
                  lineHeight: "26px",
                }}
              >
                от 31 мин
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Button
            sx={{
              background: "#F3F3F7",
              borderRadius: "28px",
              px: 3,
            }}
          >
            <Typography
              sx={{
                color: "#696F7A",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "14px",
                lineHeight: "28px",
                textTransform: "capitalize",
              }}
            >
              Заказать звонок
            </Typography>
          </Button>
          <Typography
            sx={{
              color: "#F7D22D",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "26px",
              lineHeight: "32px",
            }}
          >
            8 499 391-84-49
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          component="div"
          sx={{ display: "flex", gap: "10px", alignItems: "center" }}
        >
          {DataProducts.map((item) => {
            return (
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "15px",
                  lineHeight: "18px",
                }}
              >
                {item.type}
              </Typography>
            );
          })}
        </Box>
        <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Button
            onClick={() => setAuth(true)}
            sx={{
              color: "#696F7A",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "16px",
              lineHeight: "28px",
              textTransform: "capitalize",
            }}
          >
            Войти
          </Button>

          <NavLink to="/savat">
            <Button
              sx={{
                background: "#F7D22D",
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: yellow[600],
                },
              }}
            >
              <Typography
                sx={{
                  background: "#F7D22D",
                  borderRadius: "8px",
                  color: "#231F20",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                Корзина | 1
              </Typography>
            </Button>
          </NavLink>
        </Box>
      </Box>
      {auth && <SignUp isAuth={disableAuth} />}
    </Container>
  );
}
