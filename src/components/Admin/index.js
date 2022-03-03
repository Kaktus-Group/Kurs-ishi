import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import TextsmsIcon from "@mui/icons-material/Textsms";
import DoneIcon from "@mui/icons-material/Done";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

import { NavLink, Routes, Route, Outlet } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { GlobalStyles } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Arizalar from "./Arizalar";
import Yetkazilgan from "./Yetkazilgan";
import Qoshish from "./Qoshish";
import Foydalanuvchilar from "./Foydalanuvchilar";

const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function AdminPanel() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [yes, setYes] = React.useState(false);
  const [isActive, setIsActive] = React.useState(true);

  const handleDrawerOpen = () => {
    if (!yes) {
      setOpen(true);
      setYes(true);
    } else {
      setOpen(false);
      setYes(false);
    }
  };
  const Salom = () => {
    setIsActive(false);
  };

  const t = createTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#3f50b5",
        dark: "#002884",
        navLink: "#ffc933",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            backgroundColor: "white",
          }}
        >
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              color: "black",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        style={{
          backgroundColor: "red !important",
        }}
      >
        <DrawerHeader></DrawerHeader>

        <List>
          <NavLink
            to="arizalar"
            style={({ isActive }) => ({
              display: "block",
              backgroundColor: isActive ? "#F7D22B" : "",
            })}
          >
            <ListItem
              color="primary"
              sx={(isActive) => ({
                borderRadius: "10px",
                margin: "6px 0",
              })}
              button
              onClick={() => Salom()}
            >
              <TextsmsIcon
                sx={{
                  marginRight: "20px",
                  fontSize: "40px",
                  marginLeft: "",
                }}
              />
              <ListItemText primary="Arizalar" />
            </ListItem>
          </NavLink>

          <NavLink
            to="yetkazilgan"
            style={({ isActive }) => ({
              display: "block",
              backgroundColor: isActive ? "#F7D22B" : "",
            })}
          >
            <ListItem
              color="primary"
              sx={({ isActive }) => ({
                borderRadius: "10px",
                margin: "6px 0",
              })}
              button
              onClick={() => Salom()}
            >
              <DoneIcon
                sx={{
                  marginRight: "20px",
                  fontSize: "40px",
                  marginLeft: "",
                }}
              />
              <ListItemText primary="Yetkazilagan" />
            </ListItem>
          </NavLink>

          <NavLink
            to="qoshish"
            style={({ isActive }) => ({
              display: "block",
              backgroundColor: isActive ? "#F7D22B" : "",
            })}
          >
            <ListItem
              color="primary"
              sx={(isActive) => ({
                borderRadius: "10px",
                margin: "6px 0",
              })}
              button
              onClick={() => Salom()}
            >
              <AddToPhotosIcon
                sx={{
                  marginRight: "20px",
                  fontSize: "40px",
                  marginLeft: "",
                }}
              />
              <ListItemText primary="Qoshish" />
            </ListItem>
          </NavLink>

          <NavLink
            to="foydalanuvchilar"
            style={({ isActive }) => ({
              display: "block",
              backgroundColor: isActive ? "#F7D22B" : "",
            })}
            sx={{
              backgroundColor: "red",
            }}
          >
            <ListItem
              color="primary"
              sx={(isActive) => ({
                borderRadius: "10px",
                margin: "6px 0",
              })}
              button
              onClick={() => Salom()}
            >
              <PeopleAltIcon
                sx={{
                  marginRight: "20px",
                  fontSize: "40px",
                  marginLeft: "",
                }}
              />
              <ListItemText primary="Foydalanuvchilar" />
            </ListItem>
          </NavLink>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
