import React, { useState } from "react";
import { Box, Button, Card, Checkbox, Container, createTheme, FormControlLabel, InputAdornment, TextField, ThemeProvider, Typography } from "@mui/material";
import saleImg from '../../assets/images/sale.png'
import { IMaskInput } from "react-imask";
import { RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material";
import Header from "../Header";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { setUsers } from "../../redux/actions/ProductsActions";

const theme = createTheme({
    palette: {
        primary: {
            main: '#F7D22D'
        },
        secondary: {
            main: '#E3ECF5'
        }
    }
})

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="(#0) 000-00-00"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value) => onChange({ target: { value } })}
        overwrite
      />
    );
  });

const UserProfile = () => {
    let navigate = useNavigate();
    const {user}=useSelector(state=>state.news)
    let [value, setValue]=useState()
    console.log(user);
    const handleChange = (e) => {
        setValue(e?.target?.value);
      };
    const userName= ()=>{
        user.name=value
        setUsers(user)
        navigate('/')
    }
    return (
        <Box>        
            <Header />
            <ThemeProvider theme={theme}>
                <Box sx={{backgroundColor: '#E3ECF5'}}>
                    <Container sx={{py: 5.5}}>
                        <Typography variant="h4" component='h1' color='primary' sx={{fontWeight: 900}}>Мои бонусы</Typography>
                        <Card elevation={3} sx={{mt: 4, p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', height: 338, width: 255}}>
                            <img src={saleImg} alt="sale"/>
                            <Typography variant="body2" component='p' sx={{textAlign: 'center', fontWeight: 700, mt: 4}}>Бонусы появятся здесь после заказа</Typography>
                        </Card>
                        <Typography variant="body2" component='p' color='primary' sx={{fontWeight: 700, mt: 5, textDecoration: 'underline', cursor: 'pointer'}}>Все наши акции</Typography>
                    </Container>
                </Box>
                <Container sx={{py: 7}}>
                    <Typography variant="h4" component='h1' color='primary' sx={{fontWeight: 800, mb: 3.5}}>Личные данные</Typography>
                    <Box 
                        component="form"
                    >
                        <Typography sx={{fontWeight: 700, fontSize: 14, mb: 0.75}}>Имя</Typography>
                        <TextField onChange={handleChange} variant="outlined" placeholder="Имя" sx={{width: '300px', mb: 3}} />

                        <Typography sx={{fontWeight: 700, fontSize: 14, mb: 0.75}}>Номер телефона</Typography>
                        <TextField
                            id="formatted-text-mask-input"
                            sx={{width: "300px"}}
                            disabled
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">+998 {user.phone}</InputAdornment>
                                ),
                                inputComponent: TextMaskCustom,
                            }}
                        />
                    </Box>

                    <Typography variant="h4" component='h1' color='primary' sx={{fontWeight: 900, my: 3.5}}>Подписки</Typography>
                    <FormControlLabel control={
                        <Checkbox label="Label" icon={<RadioButtonUnchecked />} checkedIcon={<RadioButtonChecked />} defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 18 } }}/>
                    } label="Сообщать о бонусах, акциях и новых продуктах" />

                    <Button variant="contained" onClick={ userName} color='secondary' sx={{display: 'block', mt: 5}}>Выйти</Button>
                </Container>

                <Footer />
            </ThemeProvider>
        </Box>
    )
}

export default UserProfile;

