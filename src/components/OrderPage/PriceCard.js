
import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

export default function PriceCard() {
  return (
  <Paper elevation={6} sx={{px:3    }}>
<Typography
        sx={{
          color: "#F7D22D",
          fontSize: "16px",
          fontWeight: "800",
          mt: "20px",
        }}
      >
        Состов заказа
      </Typography>
        <Box sx={{mt:2,display:"flex"}}>
        <Box>
        <Typography sx={{fontSize:"16px"}}>
        Кломбо за 599 ₽

            </Typography>
            <Typography sx={{fontSize:"11px",color:"rgba(35, 31, 32, 0.8)",opacity: 0.6}}>
            Средняя 30 см, традиционное тесто
            </Typography>
        </Box>
        <Typography sx={{fontSize:"17px",color: "#231F20",fontWeight:"bold"}}>
        599₽
        </Typography>
        </Box>
        <Box sx={{mt:2,display:"flex"}}>
        <Box>
        <Typography sx={{fontSize:"16px"}}>
        Кломбо за 599 ₽

            </Typography>
            <Typography sx={{fontSize:"11px",color:"rgba(35, 31, 32, 0.8)",opacity: 0.6}}>
            Средняя 30 см, традиционное тесто
            </Typography>
        </Box>
        <Typography sx={{fontSize:"17px",color: "#231F20",fontWeight:"bold"}}>
        599₽
        </Typography>
        </Box>
        <Box sx={{mt:2,display:"flex"}}>
        <Box>
        <Typography sx={{fontSize:"16px"}}>
        Кломбо за 599 ₽

            </Typography>
            <Typography sx={{fontSize:"11px",color:"rgba(35, 31, 32, 0.8)",opacity: 0.6}}>
            Средняя 30 см, традиционное тесто
            </Typography>
        </Box>
        <Typography sx={{fontSize:"17px",color: "#231F20",fontWeight:"bold"}}>
        599₽
        </Typography>
        </Box>
        <Box sx={{mt:2,display:"flex"}}>
        <Box>
        <Typography sx={{fontSize:"16px"}}>
        Кломбо за 599 ₽

            </Typography>
            <Typography sx={{fontSize:"11px",color:"rgba(35, 31, 32, 0.8)",opacity: 0.6}}>
            Средняя 30 см, традиционное тесто
            </Typography>
        </Box>
        <Typography sx={{fontSize:"17px",color: "#231F20",fontWeight:"bold"}}>
        599₽
        </Typography>
        </Box>
  </Paper>
  );
}

