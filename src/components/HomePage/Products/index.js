import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import { setKorzinka } from "../../../redux/actions/ProductsActions";
import store from "../../../redux/store";
function Products() {
  
  const card = useSelector((state) => state.news.product);
  console.log(card);
  const myKorzinka =(item)=>{
    let  maxsulot = {
      img: item.img,
      info: item.info,
      title:item.title,
      price: item.Price,
      Name:item.Name,
      count:1,
    }
    setKorzinka(maxsulot)
  }
  return (
    <div>
      { <Container>
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

                <Grid container spacing={4} sx={{my:1}}>
                {item.products.map((item1, index) => {
                  return (
                    <Grid key={index} item xs={12} sm={6} lg={3}  >
                    <Box   sx={{ boxShadow:4}} >
                        <img src={item1.img}  style={{
                        height: "253px",
                        objectFit:"cover",
                        borderRadius:24,
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                       }} />
                        <Typography sx={{fontStyle: "normal",
                              my:1,fontWeight: 800,
                              fontSize: "24px",
                              lineHeight: "28px",
                              textAlign:"center",
                              color: "#797979",}}>
                              {item1.Name}
                        </Typography>
                        <Typography sx={{fontStyle: "normal",
                              my:1,fontWeight: 500,
                              fontSize: "13px",
                              lineHeight: "19px",
                              textAlign:"left",
                              color: "#686466",}}>
                              {item1.title}
                        </Typography>
                        <Box sx={{display:"flex",justifyContent:{xs:"start",lg:"space-between"},gap:{xs:"16px",lg:0},alignItems:"center"}}>
                        <Typography sx={{fontStyle: "normal",
                              my:1,fontWeight: 700,
                              fontSize: "22px",
                              lineHeight: "19px",
                              textAlign:"left",
                              color: "#231F20",}}>
                              oт {item1.Price} ₽
                        </Typography>
                        <Button variant="contained" color="warning" 
                        onClick={()=> myKorzinka(item1)}>
                          korzinka
                        </Button>
                        </Box>
                    </Box>
                </Grid>
                  );
                })
              }
              </Grid>
            </>
          );
        })}
      </Container> }
    </div>
  );
}

export default Products;
