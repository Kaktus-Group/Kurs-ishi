import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import testImg from './img/image.png'
import img1 from './img/image 8.png'
import img2 from './img/image 9.png'
import img3 from './img/image 10.png'
import { Card, CardContent, CardMedia } from "@mui/material";
import { padding } from "@mui/system";

const theme = createTheme({
  palette: {
    primary: {
      light: "#f8db57",
      main: "#F7D22D",
      dark: "none",
      contrastText: "#000",
    },
    secondary: {
      ligth: "#f5f5f8",
      main: "#F3F3F7",
      dark: 'none',

      contrastText: "#828792",
    },
  },
  typography: {
    subtitle1: {
          fontWeight: 700,
          fontSize: '18px'
      },
    small: {
        fontSize: 12,
        fontWeight: 600
    }
  }
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  borderRadius: 2,
  bgcolor: "background.paper",
  boxShadow: 3,
  p: 4,
};

export default function Order() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false); 

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={handleOpen}>Open Order</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{'.MuiBackdrop-root':{background: 'linear-gradient(0deg, rgba(247, 210, 45, 0.4), rgba(247, 210, 45, 0.4)), rgba(33, 49, 52, 0.2);'}}}
      >
        <Box sx={style}>
            <CloseIcon
                onClick={handleClose}
                color="primary"
                sx={{
                    cursor: "pointer",
                    fontSize: 40,
                    position: 'absolute',
                    right: '15px'
                }}
            />
                   
            <Grid container spacing={1} sx={{'.MuiGrid-item': {padding: '0 10px'}, marginTop: 1}}>
                <Grid item xs={7}>
                   <img src={testImg} alt="test" width={400}/>
                </Grid>
                <Grid item xs={5}>
                    <Typography variant="subtitle1" component='h2' color="#000">
                        С креветками и трюфелями
                    </Typography>
                    <Typography variant="subtitle2" component='h5' color="#686466">
                        25 см, традиционное тесто, 360 г
                    </Typography>
                    <Typography variant="small" component='p' color="#686466" sx={{display: 'flex', alignItems: 'center'}}>
                        Моцарелла, соус альфредо
                        <CancelOutlinedIcon sx={{fontSize: 16, marginLeft: 0.5, cursor: 'pointer'}}/>
                    </Typography>
                    <Grid container spacing={2} sx={{marginTop: 0.5, '.MuiGrid-item': {paddingTop: '10px'}}}>
                        <Grid item xs={4} sx={{padding: 0}}>
                            <Button variant="contained" size="small" color="primary" sx={{fontSize: "11px", width: '100%', padding: '5px 45px'}}>
                                Маленькая
                            </Button>
                        </Grid>
                        <Grid item xs={4} sx={{padding: 0}}>
                            <Button variant="contained" size="small" color="secondary" sx={{fontSize: "11px", width: '100%', padding: '5px 45px'}}>
                                Средняя
                            </Button>
                        </Grid>
                        <Grid item xs={4} sx={{padding: 0}}>
                            <Button variant="contained" size="small" color="secondary" sx={{fontSize: "11px", width: '100%', padding: '5px 45px'}}>
                                Большая
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{marginTop: 0.5}}>
                        <Grid item xs={6}>
                            <Button variant="contained" size="small" color="primary" sx={{fontSize: "11px", width: '100%', padding: '5px 70px'}}>
                                Традиционное
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="contained" size="small" color="secondary" sx={{fontSize: "11px", width: '100%', padding: '5px 70px'}}>
                                Тонкое
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{marginTop: 1.5, '.MuiGrid-item': {padding:'10px 0', paddingLeft: '15px'}}} >
                        <Grid item xs={4}>
                            <Button variant="outlined" sx={{width: "100%", padding: '10px 15px', display: 'flex', flexDirection: "column", alignItems: 'center'}}>
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image={img3}
                                />
                                <CardContent sx={{padding: '0px !important', display: 'flex', flexDirection: "column", alignItems: 'center', marginTop: '5px'}}>
                                    <Typography variant="subtitle1" component="p" sx={{color: '#000', fontSize: '11px', textAlign: 'center', lineHeight: 1.5}}>
                                        Острый халапенью
                                    </Typography>
                                    <Typography variant="subtitle1" component="p" sx={{fontSize: '14px', marginTop: '5px'}}>
                                        от 120 ₽
                                    </Typography>
                                </CardContent>
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="outlined" sx={{width: "100%", padding: '10px 15px', display: 'flex', flexDirection: "column", alignItems: 'center'}}>
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image={img2}
                                />
                                <CardContent sx={{padding: '0px !important', display: 'flex', flexDirection: "column", alignItems: 'center', marginTop: '5px'}}>
                                    <Typography variant="subtitle1" component="p" sx={{color: '#000', fontSize: '11px', textAlign: 'center', lineHeight: 1.5}}>
                                        Острый халапенью
                                    </Typography>
                                    <Typography variant="subtitle1" component="p" sx={{fontSize: '14px', marginTop: '5px'}}>
                                        от 120 ₽
                                    </Typography>
                                </CardContent>
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button variant="outlined" sx={{width: "100%", padding: '10px 15px', display: 'flex', flexDirection: "column", alignItems: 'center'}}>
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image={img1}
                                />
                                <CardContent sx={{padding: '0px !important', display: 'flex', flexDirection: "column", alignItems: 'center', marginTop: '5px'}}>
                                    <Typography variant="subtitle1" component="p" sx={{color: '#000', fontSize: '11px', textAlign: 'center', lineHeight: 1.5}}>
                                        Острый халапенью
                                    </Typography>
                                    <Typography variant="subtitle1" component="p" sx={{fontSize: '14px', marginTop: '5px'}}>
                                        от 120 ₽
                                    </Typography>
                                </CardContent>
                            </Button>
                        </Grid>
                    </Grid>
                    <Button variant="contained" color="primary" sx={{width:'100%', padding:'10px 0', marginTop: 2}}>
                        Добавить в корзину 1 048 ₽
                    </Button>
                </Grid>
            </Grid>
        </Box>
      </Modal>
    </ThemeProvider>
  );
}
