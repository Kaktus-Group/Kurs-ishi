import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid, TextField } from "@mui/material";

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
      dark: "none",

      contrastText: "#828792",
    },
  },
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {xs:'95%', sm: '60%', lg: '50%', xl: '40%'},
  borderRadius: 2,
  bgcolor: "background.paper",
  boxShadow: 3,
  p: 4,
};

export default function Delivery() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false); 

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={handleOpen}>Open Delivery</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{'.MuiBackdrop-root':{background: 'linear-gradient(0deg, rgba(247, 210, 45, 0.4), rgba(247, 210, 45, 0.4)), rgba(33, 49, 52, 0.2);'}}}
      >
        <Box sx={style}>
            <Box
                sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                }}
            >
                <Typography
                  id="modal-modal-title"
                  variant="h4"
                  component="h1"
                  color="primary"
                  sx={{ fontWeight: 700, fontSize: {lg: 32, md: 28, sm: 24, xs: 24} }}
                >
                Куда доставить?
                </Typography>
                <CloseIcon
                    onClick={handleClose}
                    color="primary"
                    sx={{
                        cursor: "pointer",
                        fontSize: {lg: 48, md: 36, xs: 30},
                    }}
                />
            </Box>
          <Box
            sx={{
              marginTop: 3,
            }}
          >
            <Box>
              <Grid container spacing={2} sx={{display: 'flex', justifyContent: {xs: 'space-between', sm: 'flex-start'}}}>
                <Grid item>
                  <Button variant="contained" fullWidth>
                      Доставка
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="secondary" fullWidth>
                      Сомовывоз
                  </Button>
                </Grid>
              </Grid>
                
                
            </Box>
            <Grid container spacing={2} sx={{'.MuiGrid-item': {paddingTop: '18px'}, marginTop: 1}}>
                <Grid item xs={8}>
                    <TextField variant="outlined" size="small" fullWidth label=" Адресс"/>
                </Grid>
                <Grid item xs={4}>
                    <TextField variant="outlined" size="small" label="Дом"/>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{'.MuiGrid-item': {paddingTop: '10px'}, marginTop: 1}}>
                <Grid item xs={6} md={3}>
                    <TextField variant="outlined" size="small" label="Дом"/>
                </Grid>
                <Grid item xs={6} md={3}>
                    <TextField variant="outlined" size="small" label="Дом"/>
                    <Typography color='primary' variant='subtitle2'>Последний</Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                    <TextField variant="outlined" size="small" label="Дом"/>
                    <Typography color='primary' variant='subtitle2'>Домофон</Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                    <TextField variant="outlined" size="small" label="Дом"/>
                    <Typography color='primary' variant='subtitle2'>Последний</Typography>
                </Grid>
            </Grid>
            <TextField variant="outlined" size="small" fullWidth sx={{marginTop: 2}} label="Название адреса"/>
            <Typography variant='body1' color='secondary.dark' sx={{marginTop: 1, fontWeight: 500}}>Например, <span style={{color: '#F7D22D'}}>Дом</span> или <span style={{color: '#F7D22D'}}>Работа</span></Typography>
            <TextField variant="outlined" size="small" fullWidth sx={{marginTop: 1}} label="Комментарий к адресу" multiline minRows={3}/>
            <Button variant="contained" sx={{width: {md: 210, xs: '100%'}, padding: "10px", fontWeight: 700, marginTop: 4}}>
              Подтевердить адрес
            </Button>
          </Box>
        </Box>
      </Modal>
    </ThemeProvider>
  );
}
