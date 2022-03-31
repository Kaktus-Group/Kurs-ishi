import {
  Button,
  Container,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import DataProducts from "../../redux/reducers/DataProducts";
import logo from "../../assets/log/logo.jpg";
import little from "../../assets/log/little.png";
import yulduz from "../../assets/log/yulduz.png";
import { NavLink, useNavigate } from "react-router-dom";
import SignUp from "../Modal/SignUp";
import { yellow } from "@mui/material/colors";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";
import MenuItem from "@mui/material/MenuItem";

export default function Header() {
  const theme = {
    palette: {
      warning: {
        light: "#f8db57",
        main: "#F7D22D",
        dark: "#ac931f",
        contrastText: "#fff",
      },
    }
  }

  const md = useMediaQuery("(min-width: 900px)");
  const xs = useMediaQuery("(max-width: 600px)");

  const count = useSelector(state=>state.news.korzinka)
  // For sign in
  const [auth, setAuth] = React.useState(false);
  const disableAuth = () => setAuth(false);

  // Responsive Appbar
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const {user}=useSelector(state=>state.news);
  let navigate = useNavigate();

  return (
    <Box sx={{
      position: 'sticky',
        top:0,
        zIndex:999999,
        background:"#ffffff",
        my:2
    }}>
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
            gap: 5,
          }}
        >
          <NavLink to="/">
            <img src={logo}  alt="logo" />
          </NavLink>
          <Box sx={{ display: { md: "block", xs: "none" } }}>
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
            gap: 2,
          }}
        >
          <Button
            sx={{
              display: { md: "flex", xs: "none" },
              background: "#F3F3F7",
              borderRadius: "28px",
              px: 2.5,
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
              display: { xs: "none", sm: "block" },
              color: "#F7D22D",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "25px",
              lineHeight: "32px",
            }}
          >
            8 499 391-84-49
          </Typography>

          {!md ? (
            <NavLink to="/savat">
              <Button
                sx={{
                  display: { xs: "none", sm: "flex" },
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
                  Корзина | {count.length}
                </Typography>
              </Button>
            </NavLink>
          ) : (
            ""
          )}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                padding: 0.5,
              }}
            >
              <MenuIcon fontSize="240px" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "flex", md: "none" },
                '.css-6hp17o-MuiList-root-MuiMenu-list': {
                  padding: {xs: '15px 0', sm: '15px 10px'},
                  backgroundColor: {xs: '#F7D22D', sm: '#fff'},
                  display: {xs: 'flex', sm: 'block'},
                  flexDirection: 'column',
                  alignItems: 'center'
                }
              }}
            >
              {DataProducts.map((item) => (
                <MenuItem key={item} onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{
                      width: "75px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "18px",
                      cursor: "pointer",
                      textAlign: {xs: 'center', sm: 'left'}                      
                    }}
                  >
                    {item.type}
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem key={"sinIn"} onClick={handleCloseNavMenu}>
              {
                (user.name!=="")?
               <NavLink to="/user">
                  <Typography 
                sx={{
                  color: {sm: "#F7D22D", xs: '#000'},
                      fontStyle: "normal",
                      fontWeight: "bold",
                      fontSize: "16px",
                      lineHeight: "18px",
                      fontWeight: 700
                }}
                >{user.name}</Typography>
               </NavLink>
                :
                  <Typography
                    onClick={() => setAuth(true)}
                    sx={{
                      color: {sm: "#F7D22D", xs: '#000'},
                      fontStyle: "normal",
                      fontWeight: "bold",
                      fontSize: "16px",
                      lineHeight: "18px",
                      fontWeight: 700
                    }}
                  >
                    Войти
                  </Typography>
              }
              </MenuItem>

              {xs ? <MenuItem key={"phone"} onClick={handleCloseNavMenu}>
                <Typography
                  sx={{
                    color: "#000",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "20px",
                    lineHeight: "24px",
                  }}
                >
                  8 499 391-84-49
                </Typography>
              </MenuItem> : ''}
              
              {xs ? <MenuItem key={"cart"} onClick={handleCloseNavMenu}>
                <NavLink to="/savat">
                  <Button
                    sx={{
                      background: "#FFF",
                      borderRadius: "8px",
                      "&:hover": {
                        backgroundColor: '#fff',
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        background: "#FFF",
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
              </MenuItem> : ''}
              
            </Menu>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: { md: "flex", xs: "none" },
          justifyContent: "space-between",
          
        }}
      >
        <Box
          component="div"
          sx={{ display: "flex", gap: "20px", alignItems: "center" }}
        >
          {DataProducts.map((item) => {
            return (
              <Typography
                sx={{
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "15px",
                  lineHeight: "18px",
                  cursor: "pointer",
                }}
              >
                {item.type}
              </Typography>
            );
          })}
        </Box>
        <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
          {
            (user.name!=="")?
            <NavLink to="/user">
            <Typography 
          sx={{
            color: {sm: "#F7D22D", xs: '#000'},
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "16px",
                lineHeight: "18px",
                fontWeight: 700
          }}
          >{user.name}</Typography>
         </NavLink>:
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
          }

          <NavLink to="/savat">
            <Button variant="contained" color={'warning'}>
              <Typography sx={{fontStyle: "normal",
                              my:1,
                              fontWeight: 700,
                              fontSize: "16px",
                              lineHeight: "19px",
                              textAlign:"left",
                              color: "#231F20",}}>
                Корзина | {count.length}
              </Typography>
            </Button>
          </NavLink>
        </Box>
      </Box>
      {auth && <SignUp isAuth={disableAuth} />}
    </Container>
    </Box>
    
  );
}
