import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import { Container, Grid,  Typography } from '@mui/material'
import KorHeader from '../Header/KorHeader';
import Footer from '../Footer';
import Sous from './sous';
import Carusel from './slick';
import { useSelector } from 'react-redux';
import { decKorzinka, IncKorzinka, removeKorzinka } from '../../redux/actions/ProductsActions';
import Promokod from './Zakas';

export default function MyKor() {
  const korzinka = useSelector((state) => state.news.korzinka);
 const removeMyKorzinka=(index)=>removeKorzinka(index)
 const incrementCount=(index)=>IncKorzinka(index)
 const Decrement=(index)=>decKorzinka(index)

return (
      <Container>
        <KorHeader/>
  <Container maxWidth='md'>
      <Typography component="h3" variant="h2" color='orange' borderBottom={"2px solid rgba(0, 0, 0, 0.06)"} sx={{mb:2}}>
        Korzinka
      </Typography>
        
        { 

          korzinka.map((item,index)=>(
            <Box   key={index}  sx={{py:2,alignItem:"center",display:"flex", borderBottom:"2px solid rgba(0, 0, 0, 0.06)",justifyContent:"space-between"}}>

           <Box display="flex" gap="20px" >
           <img src={item.img}  style={{width:"90px",objectFit:"cover", height:"90px",borderRadius: "50%", }} />
            <Box sx={{
              alignItem:"center",display:"flex",flexDirection:"column",justifyContent:"center",
            }} >
              <Typography sx={{
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "19px",
                lineHeight: "17px",
                color: "#0E0C0D",
                mb:1
              }}>
                {item.Name}
              </Typography>
              <Typography sx={{
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "13px",
                lineHeight: "19px",
                color: "#686466",
                opacity:{xs:0,md:1}
              }}>
                {item.title}
              </Typography>
            </Box>
           
           </Box>
              <Box display="flex" >   
                         <Typography variant={'h5'} color="orange" sx={{display:"flex" , alignItems:"center"}} component="h5">
                {item.price*item.count}$
              </Typography>
              <Box sx={{display:"flex",alignItems:"center"}} >

                <Button  onClick={()=>Decrement(index)} sx={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "18px",
            lineHeight: "28px",
            textAlign: "center",
            color: "#696F7A",
            
            
          }}>-</Button>
                <Button sx={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "18px",
            lineHeight: "28px",
            textAlign: "center",
            color: "#696F7A",
            
            
          }} >{item.count}</Button>
                <Button sx={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "18px",
            lineHeight: "28px",
            textAlign: "center",
            color: "#696F7A",
            
          }} onClick={()=>incrementCount(index)}>+</Button>
              
              </Box>
              <Box sx={{
                display:"flex",alignItems:"center"
              }} >
                <Box  onClick={()=>removeMyKorzinka(index) } 
                sx={{width:"25px",height:"25px",borderRadius:"50%",border:"1px solid gray",p:0, display:"flex",alignItems:"center",justifyContent:"center",p:1 ,'&:hover':{borderColor:"orange"},  }}>
              <svg xmlns="http://www.w3.org/2000/svg" width={"15px"} height={"15px"} viewBox="0 0 384 512"><path d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z"/></svg>

              </Box>
              </Box>
              </Box>
            </Box>
          ))
        }
        <Carusel />
        <Sous />
        <Promokod />
 </Container>
 <Footer />
      </Container>
    )
}
