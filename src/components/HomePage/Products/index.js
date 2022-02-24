import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import firstPiz from "../../../assets/images/firstPizza.png";
import secPiz from "../../../assets/images/secondPizza.png";
import thirdPiz from "../../../assets/images/thirdPizza.png";
import fourthPiz from "../../../assets/images/fourthPizza.png";
import { CardActionArea, Container } from "@mui/material";

function Products() {
  const [card, setCard] = React.useState([
    {
      img: `${firstPiz}`,
      info: "С креветками и трюфелями",
      title:
        "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
      price: "от 600 ₽",
      btnInfo: "В корзину",
    },
    {
      img: `${secPiz}`,
      info: "С креветками и трюфелями",
      title:
        "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
      price: "от 600 ₽",
      btnInfo: "В корзину",
    },
    {
      img: `${thirdPiz}`,
      info: "С креветками и трюфелями",
      title:
        "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
      price: "от 600 ₽",
      btnInfo: "В корзину",
    },
    {
      img: `${fourthPiz}`,
      info: "С креветками и трюфелями",
      title:
        "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
      price: "от 600 ₽",
      btnInfo: "В корзину",
    },
    {
      img: `${firstPiz}`,
      info: "С креветками и трюфелями",
      title:
        "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
      price: "от 600 ₽",
      btnInfo: "В корзину",
    },
    {
      img: `${secPiz}`,
      info: "С креветками и трюфелями",
      title:
        "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
      price: "от 600 ₽",
      btnInfo: "В корзину",
    },
    {
      img: `${thirdPiz}`,
      info: "С креветками и трюфелями",
      title:
        "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
      price: "от 600 ₽",
      btnInfo: "В корзину",
    },
    {
      img: `${fourthPiz}`,
      info: "С креветками и трюфелями",
      title:
        "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
      price: "от 600 ₽",
      btnInfo: "В корзину",
    },
  ]);
  return (
    <div>
      <Container>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "32px",
            color: "#F7D22D",
            mt: "45px",
            mb: "20px",
          }}
        >
          Паста
        </Typography>

        <div className="flex flex-wrap justify-between">
          {card.map((item, i) => {
            return (
              <Card sx={{ maxWidth: 280, my: "16px" }} key={i}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.img}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        color: "#797979",
                        fontSize: "24px",
                      }}
                    >
                      {item.info}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.title}
                    </Typography>
                    <div className="flex justify-between mt-6">
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          color: "#231F20",
                          fontSize: "22px",
                        }}
                      >
                        {item.price}
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{ background: "#F7D22D !important" }}
                      >
                        {item.btnInfo}
                      </Button>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default Products;
