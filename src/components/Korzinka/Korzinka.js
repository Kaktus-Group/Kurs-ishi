import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import { Container, Grid, List, ListItem, Typography } from '@mui/material'
import KorHeader from '../Header/KorHeader';
export default function MyKor() {
  const [data,setData]=useState([  
    {
      img: "https://proprikol.ru/wp-content/uploads/2020/11/kartinki-piczcza-40.jpeg",
      info: "С креветками и трюфелями",
      title:
      "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
      price: 600,
      count:3,
    },
  {
    img: "https://proprikol.ru/wp-content/uploads/2020/11/kartinki-piczcza-40.jpeg",
    info: "С креветками и трюфелями",
    title:
    "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
    price: 600,
    count:3,
  },
  
])
const [count,setCount]=useState(1);
console.log(data);
const Decrement = ()=>{
  (count===1)?count=1:setCount(prev=>prev-1)
}
const Increment = ()=>{
  setCount(prev=>prev+1)
}
return (
      <Container>
        <KorHeader/>
  <Container maxWidth='md'>
      <Typography component="h3" variant="h2" color='orange' borderBottom={"2px solid rgba(0, 0, 0, 0.06)"} sx={{mb:2}}>
        Korzinka
      </Typography>
        
        {
          data.map((item,index)=>(
            <Grid item xs={12} key={index}  sx={{py:2,alignItem:"center",display:"flex",gap:'20px', borderBottom:"2px solid rgba(0, 0, 0, 0.06)"}}>
              <img src={item.img} width="71px" style={{ borderRadius: "50%", }} />
            <Box >
              <Typography variant={'h6'} component="h3">
                {item.info}
              </Typography>
              <Typography variant={'p'} component="p">
                {item.title}
              </Typography>
            </Box>
            <Typography variant={'h5'} color="orange" sx={{display:"flex" , alignItems:"center"}} component="h5">
                {item.price*item.count}$
              </Typography>
              <Box sx={{display:"flex",alignItems:"center"}} >

                <Button  onClick={()=>(item.count===1)?item.count=1:setCount(item.count-=1)}>-</Button>
                <Button  >{item.count}</Button>
                <Button onClick={()=>setCount(item.count+=1)}>+</Button>
              
              </Box>
              <Box color="warning" onClick={(index)=>{
                data.splice(index,1)
                setData([...data])
                console.log(index);
                }} sx={{width:"25px",height:"25px",borderRadius:"50%",border:"1px solid gray",p:0, display:"flex",alignItems:"center",justifyContent:"center",p:1 ,'&:hover':{borderColor:"orange"},  }}>
              <svg xmlns="http://www.w3.org/2000/svg" width={"15px"} height={"15px"} viewBox="0 0 384 512"><path d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z"/></svg>

              </Box> 
            </Grid>
          ))
        }
 </Container>
      </Container>
    )
}
