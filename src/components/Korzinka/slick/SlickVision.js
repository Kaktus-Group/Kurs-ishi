import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperCore,{ Autoplay} from 'swiper';
import { setKorzinka } from '../../../redux/actions/ProductsActions';
export default function SimpleSlider()  {
  SwiperCore.use([Autoplay])
  const card = useSelector((state) => state.news.product);
  console.log(card);
  const myKorzinka =(item)=>{
    console.log(item);
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
    <Box>
      {
        card.map((item)=>{
          return(
            <Swiper 
            modules={Autoplay}
            spaceBetween={10}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 3000 }}
            >
            { item.type == "Пицца" &&
              item.products.map((product)=>{
                return(
                  
                  <SwiperSlide  onClick={()=>{myKorzinka(product)}} >
                    <Box sx={{
                    background: "#FFFFFF",
                    border: "2px solid #E2E2E9",
                    boxSizing: "border-box",
                    borderRadius: "12px",
                    p:{sm:1,md:2,},
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"space-around",
                  }}
                  >
                      <img src={product.img} style={{width: "71px",height: "71px",borderRadius:"50%",objectFit:"cover"}}  />
                    <Box>
                      <Typography sx={{
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: "13px",
                        lineHeight: "14px",
                        color: "#000000",
                      }} >
                    {product.Name}
                      </Typography>
                      <Typography sx={{
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "#FF2E65",
                      }}>
                      от {product.Price} ₽
                      </Typography>
                    </Box>
                  </Box>
                    
            </SwiperSlide>
                )
              })
            }
             </Swiper>

          )
        })
      
      }
    </Box>
    
  );
};