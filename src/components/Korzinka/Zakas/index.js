import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";


export default function Promokod(){
  const korzinka = useSelector((state)=>state.news.korzinka)
  console.log(korzinka);
  var summa = 0
  korzinka.map((item)=>{
    summa += item.count*item.price
  })
  console.log(summa);
  return(
    <Box sx={{
      my:2
    }}>
    <Typography sx={{
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "22px",
      lineHeight: "17px",
      color: "#FF2E65",
    }}>
    Промокод
    </Typography>

    <Box>
    
    </Box>

    </Box>
  )
}