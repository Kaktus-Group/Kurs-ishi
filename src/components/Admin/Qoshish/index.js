import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";

export default function Qoshish() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <NavLink to="/">To Home page</NavLink>
      <div>
        <TextField
          style={{
            width: "47%",
          }}
          id="standard-required"
          label="Taom uchun"
          variant="standard"
        />
        <TextField
          style={{
            width: "47%",
          }}
          id="standard-helperText"
          label="Kategoriya uchun"
          defaultValue=""
          variant="standard"
        />
      </div>
    </Box>
  );
}
