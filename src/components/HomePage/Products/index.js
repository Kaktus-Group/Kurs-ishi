import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";
import DataProducts from "../../../redux/reducers/DataProducts";
function Products() {
  const card = DataProducts;
  return (
    <div>
      <Container>
        {card.map((item, i) => {
          return (
            <>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "32px",
                  color: "#F7D22D",
                  mt: "45px",
                  mb: "20px",
                }}
              >
                {item.type}
              </Typography>

              <div className="flex flex-wrap gap-4">
                {item.products.map((item1, i) => {
                  return (
                    <Card sx={{ maxWidth: 275, my: "16px" }} key={i}>
                      <CardActionArea>
                        <CardMedia
                          sx={{
                            height: "275px",
                            objectFit: "cover",
                          }}
                          component="img"
                          image={item1.img}
                          alt="Pitsas"
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
                            {item1.Name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item1.title}
                          </Typography>
                          <div className="flex justify-between mt-6">
                            <Typography
                              sx={{
                                fontWeight: "bold",
                                color: "#231F20",
                                fontSize: "20px",
                              }}
                            >
                              {item1.Price} so'mdan
                            </Typography>
                            <Button
                              variant="contained"
                              sx={{ background: "#F7D22D !important" }}
                            >
                              Savatga
                            </Button>
                          </div>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  );
                })}
              </div>
            </>
          );
        })}
      </Container>
    </div>
  );
}

export default Products;
