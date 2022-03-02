import {
  Container,
  Typography,
  TextField,
  Box,
} from "@mui/material";
import React from "react";

function Inputs() {
  return (
    <div>
      <Container sx={{ mt: "25px",  }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: "12px",
          }}
        >
          <Typography
            sx={{
              fontSize: "17px",
              color: "#231F20",
              fontWeight: "600",
              opacity: "0.7",
            }}
          >
            Номер телефона
          </Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { width: "40ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              type="text"
              sx={{
                ".MuiOutlinedInput-input": {
                  padding: "8px 12px",
                  borderRadius: "7px",
                  border: "1.5px solid #F3F3F7",
                },
              }}
              variant="outlined"
              defaultValue={"+7 999 999-99-99"}
            />
          </Box>
        </Container>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: "12px",
          }}
        >
          <Typography
            sx={{
              fontSize: "17px",
              color: "#231F20",
              fontWeight: "600",
              opacity: "0.7",
            }}
          >
            Адрес доставки
          </Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { width: "40ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="filled-multiline-static"
              multiline
              rows={4}
              defaultValue="Дом
              ул. КИМа, д. 1, под. Последний, эт. Последний, кв. 22, код Домофон"
              variant="filled"
            />
          </Box>
        </Container>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: "12px",
          }}
        >
          <Typography
            sx={{
              fontSize: "17px",
              color: "#231F20",
              fontWeight: "600",
              opacity: "0.7",
            }}
          >
            Время доставки
          </Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { width: "40ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              type="text"
              sx={{
                ".MuiOutlinedInput-input": {
                  padding: "8px 12px",
                  background: "rgba(241, 242, 245, 0.6)",
                  borderRadius: "7px",
                  border: "1.5px solid #F3F3F7",
                },
              }}
              variant="outlined"
              defaultValue={"Побыстрее"}
            />
          </Box>
        </Container>
      </Container>
    </div>
  );
}

export default Inputs;
