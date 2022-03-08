import { Container, Typography } from "@mui/material";
import SimpleSlider from "./SlickVision";

const Carusel = () => {
  return (
    <Container>
      <Typography
        sx={{
          fontSize: "24px",
          color: "#F7D22D",
          fontWeight: "bold",
          mb: 2,
        }}
      >
        Добавить к заказу?
      </Typography>
      <SimpleSlider />
    </Container>
  );
};
export default Carusel;
