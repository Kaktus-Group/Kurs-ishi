import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Alert, FormControl, Grid, InputAdornment, TextField } from "@mui/material";
import { IMaskInput } from "react-imask";
import { useNavigate } from "react-router-dom";
import { setUsers } from "../../redux/actions/ProductsActions";
import { useSelector } from "react-redux";

const theme = createTheme({
  palette: {
    primary: {
      light: "#f8db57",
      main: "#F7D22D",
      dark: "#ac931f",
      contrastText: "#fff",
    },
    secondary: {
      light: "#b0b0af",
      main: "#9D9D9B",
      dark: "#686466",
      contrastText: "#fff",
    },
  },
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  borderRadius: 2,
  bgcolor: "background.paper",
  boxShadow: 3,
  p: 4,
};

// For phone
const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(#0) 000-00-00"
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { value } })}
      overwrite
    />
  );
});

export default function SignUp(props) {
  let navigate = useNavigate();
const {user} = useSelector(state => state.news)
  const [open, setOpen] = React.useState(true);
  const [value, setValue] = React.useState('');
  const [confirm, setConfirm] = React.useState('');

  const [guard, setGuard] = React.useState(false);
  const [submit, setSubmit] = React.useState(false);
  const [check, setCheck] = React.useState(0);
  const [isChecked, setIsChecked] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    props.isAuth();
    setOpen(false);
    setSubmit(false);
    setConfirm("");
    setValue("");
  };


  const handleChange = (e) => {
    //   e.preventDefault();
    setValue(e?.target?.value);
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    setConfirm(e?.target?.value);
    console.log(check);
    if (confirm === Math.trunc(check / 10).toString()) {
      user.phone=value
      setUsers(user)
      setIsChecked(false);
      navigate('/user');
    } else {
      setIsChecked(true);
    }
  };

  const onSubmit = () => {
    // Guard
    if (!(value.length === 14)) {
      setGuard(true);
      return;
    } else {
      setGuard(false);
      setSubmit(true);
      setCheck(Math.trunc(Math.random() * 89999 + 10000));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          ".MuiBackdrop-root": {
            background:
              "linear-gradient(0deg, rgba(247, 210, 45, 0.4), rgba(247, 210, 45, 0.4)), rgba(33, 49, 52, 0.2);",
          },
        }}
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              // justifyContent: "space-between",
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h4"
              component="h1"
              color="primary"
              sx={{ fontWeight: 700 }}
            >
              Вход на сайт
            </Typography>
            <CloseIcon
              onClick={handleClose}
              color="primary"
              sx={{
                cursor: "pointer",
                fontSize: {lg: 48, md: 36, xs: 28},
              }}
            />
          </Box>
          <Grid container spacing={2}
            sx={{
              marginTop: 3,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Grid item xs={12} md={3}>
              <Typography
                id="modal-modal-description"
                variant="subtitle1"
                component="p"
                color="secondary"
              >
                Номер телефона
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              {!guard ? 
                <FormControl variant="standard">
                  <TextField
                    value={value}
                    onChange={handleChange}
                    id="formatted-text-mask-input"
                    sx={{ width: 200 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">+998</InputAdornment>
                      ),
                      inputComponent: TextMaskCustom,
                    }}
                  />
                </FormControl> : <FormControl variant="standard">
                  <TextField
                    error
                    helperText="Incorrect entry"
                    value={value}
                    onChange={handleChange}
                    id="formatted-text-mask-input"
                    sx={{ width: 200 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">+998</InputAdornment>
                      ),
                      inputComponent: TextMaskCustom,
                    }}
                  />
                </FormControl>
              }
            </Grid>
            <Grid item xs={12} md={3}>
              {submit ? 
                <Typography
                  variant="body2"
                  component="p"
                  color="primary"
                  sx={{
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    setSubmit(false);
                    setValue("");
                  }}
                >
                  Изменить
                </Typography>
              : ''}
            </Grid>
            
          </Grid>
          {submit && (
            <Grid container
              sx={{
                marginTop: 5,
                display: "flex",
                alignItems: "center",
                paddingBottom: 10,
              }}
            >
              <Grid item xs={12} md={3}>
                <Typography
                  id="modal-modal-description"
                  variant="subtitle1"
                  component="p"
                  color="secondary"
                >
                  Код из СМС
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                {!isChecked ? 
                  <TextField
                    id="outlined-start-adornment"
                    value={confirm}
                    onChange={handleConfirm}
                    sx={{ width: 100 }}
                    type="number"
                    InputProps={{
                      inputMode: "numeric",
                      pattern: "[0-9]*",
                    }}
                  />
                : <TextField
                    id="outlined-start-adornment"
                    error
                    value={confirm}
                    onChange={handleConfirm}
                    sx={{ width: 100 }}
                    type="number"
                    InputProps={{
                      inputMode: "numeric",
                      pattern: "[0-9]*",
                    }}
                  />}
                {isChecked && (
                  <Alert
                    variant="filled"
                    severity="error"
                    sx={{
                      padding: "0px 10px",
                      position: "absolute",
                      bottom: "70px",
                      left: "160px",
                      fontSize: "0.65rem",
                      ".css-1vooibu-MuiSvgIcon-root": {
                        width: "1rem",
                        height: "1rem",
                      },
                      ".css-1ytlwq5-MuiAlert-icon": {
                        marginRight: "5px !important",
                      },
                    }}
                  >
                    Неверный код
                  </Alert>
                )}
              </Grid>
              <Grid item xs={12} md={3}>
                {submit && (
                  <Typography
                    variant="body2"
                    component="p"
                    color="primary"
                    onClick={onSubmit}
                    sx={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Получить новый код
                  </Typography>
                )}
              </Grid>
            </Grid>
          )}
          {!submit && (
            <Box sx={{ mt: 7, display: "flex", alignItems: "center" }}>
              <Button
                variant="contained"
                onClick={onSubmit}
                sx={{ width: "400px", padding: "10px 30px" }}
              >
                Выслать код
              </Button>
              <Typography
                id="modal-modal-description"
                variant="body2"
                component="p"
                color="secondary"
                marginLeft={3}
              >
                Продолжая, вы соглашаетесь со сбором и обработкой персональных
                данных и пользовательским соглашением
              </Typography>
            </Box>
          )}
        </Box>
      </Modal>
    </ThemeProvider>
  );
}
