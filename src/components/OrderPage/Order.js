import React from "react";
import { Container, Radio, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { FaInfoCircle } from "react-icons/fa";
function Order() {
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
      <Container sx={{ my: 4, display: "flex", alignItems: "center", gap: 1 }}>
        <Radio
          {...controlProps("e")}
          defaultChecked
          sx={{
            color: yellow[800],
            "&.Mui-checked": {
              color: yellow[600],
            },
          }}
        />
        <Typography
          sx={{ fontSize: "15px", color: "#231F20", fontWeight: "700" }}
        >
          Сообщать о бонусах, акциях и новых продуктах
        </Typography>
        <FaInfoCircle className="text-xl text-gray-400 ml-2" />
      </Container>
    </div>
  );
}


export default Order;
