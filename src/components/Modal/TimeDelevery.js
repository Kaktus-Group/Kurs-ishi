import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#f8db57",
      main: "#F7D22D",
      dark: "#ac931f",
      contrastText: "#000",
    },
    secondary: {
      ligth: "#f5f5f8",
      main: "#F3F3F7",
      dark: "#F7D22D",

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
  bgcolor: "#E3ECF5;",
  boxShadow: 3,
  p: 4,
};

export default function TimeDelivery() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false); 

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={handleOpen}>Open TimeDelevery</Button>
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
                  color="#696F7A"
                  sx={{ fontWeight: 700, fontSize: {lg: 32, md: 28, sm: 24, xs: 24}}}
                >
                Время доставки
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
              marginTop: 2,
            }}
          >            
            <Grid container spacing={2} sx={{marginTop: 1}} >
                <Grid item xs={12} sm={6}>
                    <Button variant="contained" color="secondary" sx={{width:'100%', padding:'15px 20px', justifyContent: 'start'}}>
                        Побыстрее
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button variant="contained" color="secondary" sx={{width:'100%', padding:'15px 20px', justifyContent: 'start'}}>
                        15:00 - 15:30
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button variant="contained" color="secondary" sx={{width:'100%', padding:'15px 20px', justifyContent: 'start'}}>
                        15:00 - 15:30
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button variant="contained" color="secondary" sx={{width:'100%', padding:'15px 20px', justifyContent: 'start'}}>
                        15:00 - 15:30
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button variant="contained" color="secondary" sx={{width:'100%', padding:'15px 20px', justifyContent: 'start'}}>
                        15:00 - 15:30
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button variant="contained" color="secondary" sx={{width:'100%', padding:'15px 20px', justifyContent: 'start'}}>
                        15:00 - 15:30
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button variant="contained" color="secondary" sx={{width:'100%', padding:'15px 20px', justifyContent: 'start'}}>
                        15:00 - 15:30
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button variant="contained" color="secondary" sx={{width:'100%', padding:'15px 20px', justifyContent: 'start'}}>
                        15:00 - 15:30
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button variant="contained" color="secondary" sx={{width:'100%', padding:'15px 20px', justifyContent: 'start'}}>
                        15:00 - 15:30
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button variant="contained" color="secondary" sx={{width:'100%', padding:'15px 20px', justifyContent: 'start'}}>
                        15:00 - 15:30
                    </Button>
                </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </ThemeProvider>
  );
}
