import {
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";
import MenuItem from "@mui/material/MenuItem";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Price() {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });
  return (
    <div>
      <Container
        sx={{
          background: "rgba(241, 242, 245, 0.6)",
          padding: "40px",
          mt: "60px",
        }}
      >
        <Typography
          sx={{ color: "#FF2E65", fontWeight: "600", fontSize: "28px" }}
        >
          Способы оплаты
        </Typography>
        <FormControl
          sx={{
            my: "15px",
          }}
        >
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="Картой на сайте"
              control={
                <Radio
                  {...controlProps("")}
                  sx={{
                    color: pink[800],
                    "&.Mui-checked": {
                      color: pink[600],
                    },
                  }}
                />
              }
              label="Картой на сайте"
            />
            <FormControlLabel
              value="Наличными"
              control={
                <Radio
                  {...controlProps("e")}
                  sx={{
                    color: pink[800],
                    "&.Mui-checked": {
                      color: pink[600],
                    },
                  }}
                />
              }
              label="Наличными"
            />
          </RadioGroup>
        </FormControl>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-start",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Typography sx={{ fontSize: "15px" }}>
            С какой сыммы подготовить сдачу?
          </Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { width: "15ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder={"$"}
              sx={{
                ".MuiOutlinedInput-input": {
                  padding: "8px 12px",
                  borderRadius: "7px",
                  background: "white",
                  border: "1.5px solid #E2E2E9",
                },
              }}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              {...label}
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
            />
            <Typography sx={{ fontSize: "15px", fontWeight: "400" }}>
              Без сдачи
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Price;
