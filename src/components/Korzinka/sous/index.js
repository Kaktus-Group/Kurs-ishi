import { Box, Card, CardActionArea, CardContent, CardMedia,  Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import DataProducts from "../../../redux/reducers/DataProducts";

export default function Sous(){
 
  return (
    <Box>
    <Typography sx={{
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "24px",
      lineHeight: "17px",
      color: "#F7D22D",
      my:3,
    }}>
        Соусы к бортикам и закускам

    </Typography>
    <Grid container justifyContent="center"alignItems="center" spacing={2} sx={{mb:3}}>
      {
        DataProducts.map((item)=>(
          
          item.type=="Sous"&&item.products.map((product,index)=>(
            <Grid item xs={6} sm={4} md={3} >
              <Card key={index}  sx={{maxWidth:"200px",}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={product.img}
          alt="green iguana"
          sx={{
            width:"100%",
            height:"200px"
          }}
        />
        <CardContent>
          <Typography sx={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "22px",
            lineHeight: "17px",
            textAlign: "center",
            color: "#000000",
            my:1
            
          }}>
                {product.Name}
          </Typography>
          <Typography sx={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "14px",
            lineHeight: "17px",
            textAlign: "center",
            color: "#FF2E65",
            
          }}>
                {product.Price} so'mdan
          </Typography>
        </CardContent>
      </CardActionArea>   
              </Card>
            </Grid>  
          ))                
        ))  
      }         
        
    </Grid>
    </Box>   
  ) 
}