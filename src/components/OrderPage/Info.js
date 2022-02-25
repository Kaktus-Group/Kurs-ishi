import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F7D22D",
      contrastText: "#231F20",
      borderRadius: "0px",
    },
  },
});

function Info() {
  return (
    <div>
      <Container>
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: "600",
            color: "#F7D22D",
            mt: "40px",
            mb: "30px",
          }}
        >
          Промокод
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            "& > :not(style)": { width: "35ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            type="text"
            placeholder={"Введите промокод"}
            sx={{
              ".MuiOutlinedInput-input": {
                padding: "8px 12px",
                borderRadius: "7px",
                border: "1.5px solid #F3F3F7",
              },
            }}
            id="outlined-basic"
            variant="outlined"
          />
          {/* <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              sx={{
                fontSize: "13px",
                fontWeight: "700",
              }}
            >
              Применить
            </Button>
          </ThemeProvider> */}
        </Box>
      </Container>
    </div>
  );
}

export default Info;
