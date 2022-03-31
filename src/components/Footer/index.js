import React from "react";
import { Box, Button, Container, createTheme, Grid, ThemeProvider, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import logo from './img/logo.png';
import footerCornerImg from './img/cornerImg.png';
import visa from './img/visa.png';
import mastercard from './img/mastercard.png';
import paypal from './img/paypal.png';
import viber from './img/viber.png';
import skype from './img/skype.png';
import messenger from './img/messenger.png';
import telegram from './img/telegram.png';
import facebook from './img/facebook.png';
import vKontacte from './img/vKontacte.png';
import { NavLink } from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: {
            main: '#F7D22D'
        },
        secondary: {
            main: '#E3ECF5'
        }
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: {variant: 'footer'},
                    style: {
                        border: `2px solid #E3ECF5 `,
                        borderRadius: `12px`,
                        padding: '5px',                       
                    }
                }
            ]
        }
    }
})




const Footer = () => {
    const lg = useMediaQuery('(min-width: 1200px)');
    const xs = useMediaQuery('(max-width: 600px)');

    console.log('lg', lg);
    // console.log('md', md);
    // console.log('sm', sm);
    console.log('xs', xs);

    return (
        <ThemeProvider theme={theme}>
            
            <Container sx={{pt: 8,  pb: {xs: 1.5, sm: 3.5, md: 5.5, lg: 7.5}}}>
                <Grid container spacing={5}>
                    <Grid item lg={6} xs={12}>
                        <Grid container spacing={3}>
                            <Grid item lg={12} sm={4} xs={12} sx={{paddingTop: {xs: '0px !important'}}}>
                                <Box display={'flex'} justifyContent="space-between">
                                    <NavLink to="/">
                                        <img src={logo} alt="logo" width='90px' style={{display: 'inline', cursor: "pointer"}}/>
                                    </NavLink>
                                    {xs ? <Box display={'flex'} flexDirection='column' alignItems={'flex-end'}>
                                        <Typography variant="h4" component='h1' color='primary' sx={{fontWeight: 800, fontSize: {xs: 20, sm: 24, md: 30}}}>8 499 391-84-49</Typography>
                                        <Button variant="contained" color= 'secondary' sx={{borderRadius: 15, padding: '7px 20px', fontSize: {xs: '10px', sm: '12px', md: '16px'}, mt: 1}}>Заказать звонок</Button>
                                    </Box> : ''}
                                </Box>
                            </Grid>
                            <Grid item lg={12} sm={8} xs={12}>
                                <Box sx={{display: 'flex', mt: {xs: 0, md: 3, lg: 4}, justifyContent: {xs: 'space-between'}}}>
                                    <Typography variant="body1" component='p' sx={{fontWeight: 700, fontSize: {xs: 13.5, sm: 16}}}>Калорийность и состав</Typography>
                                    <Typography variant="body1" component='p' sx={{fontWeight: 700, ml: {sm: 6.5}, fontSize: {xs: 13.5, sm: 16}}}>Правовая информация</Typography>
                                </Box>
                                <Box sx={{mt: {xs: 2, md: 3}}}>
                                    <Typography variant="body1" component='p' sx={{fontWeight: 700, fontSize: {xs: 13.5, sm: 16}}}>Мы в соцсетях</Typography>
                                    <Box sx={{display: 'grid', gridTemplateColumns: '1fr 1fr 2fr', gap: 1, mt: 2}}>
                                        <Typography variant="body2" component='p' sx={{color: '#0E0C0D', fontWeight: 600, fontSize: {xs: 13, sm: 16}, opacity: 0.7, cursor: "pointer"}}>YouTube</Typography>
                                        <Typography variant="body2" component='p' sx={{color: '#0E0C0D', fontWeight: 600, fontSize: {xs: 13, sm: 16}, opacity: 0.7, cursor: "pointer"}}>Facebook</Typography>
                                        <Typography variant="body2" component='p' sx={{color: '#0E0C0D', fontWeight: 600, fontSize: {xs: 13, sm: 16}, opacity: 0.7, cursor: "pointer"}}>Москва ул. Проспект</Typography>
                                        <Typography variant="body2" component='p' sx={{color: '#0E0C0D', fontWeight: 600, fontSize: {xs: 13, sm: 16}, opacity: 0.7, cursor: "pointer"}}>Instagram</Typography>
                                        <Typography variant="body2" component='p' sx={{color: '#0E0C0D', fontWeight: 600, fontSize: {xs: 13, sm: 16}, opacity: 0.7, cursor: "pointer"}}>ВКонтакте</Typography>
                                        <Typography variant="body2" component='p' sx={{color: '#0E0C0D', fontWeight: 600, fontSize: {xs: 13, sm: 16}, opacity: 0.7, cursor: "pointer"}}>Вернадского 86В</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                        
                        { lg ? <Box sx={{mt: 6, display: 'flex', alignItems: "center", justifyContent: 'space-between'}}>
                            <Typography variant="body2" component='p' sx={{color: '#0E0C0D', fontWeight: 600, opacity: 0.8, cursor: "pointer"}}>YaBao Все праав защищены © 2021</Typography>
                            <Box display='flex'>
                                <img src={visa} alt="visa" style={{cursor: "pointer"}}/>
                                <img src={paypal} alt="paypal" style={{margin: '0 24px', cursor: "pointer"}}/>
                                <img src={mastercard} alt="mastercard" style={{cursor: "pointer"}}/>
                            </Box>
                        </Box> : ''
                        }
                    </Grid>
                    <Grid item lg={6} xs={12} sx={{padding: {xs: '24px 0 0 40px !important'}}}>
                        <Typography variant="body1" component='p' sx={{fontWeight: 700, fontSize: {xs: 13.5, sm: 16}}}>Остались вопросы? А мы всегда на связи:</Typography>
                        <Grid container spacing={1} sx={{mt: {xs: 1, sm: 2, lg: 4}, mb: {sm: 3, lg: 6}}}>
                            <Grid item lg={3} sm = {1.5} xs={2}>
                                <Button fullWidth variant="footer" sx={{minWidth: {xs: '45px'}}} >
                                    <img src={viber} alt="viber" />
                                </Button>
                            </Grid>
                            <Grid item lg={3} sm = {1.5} xs={2}>
                                <Button fullWidth variant="footer" sx={{minWidth: {xs: '45px'}}} >
                                    <img src={skype} alt="skype" />
                                </Button>
                            </Grid>
                            <Grid item lg={3} sm = {1.5} xs={2}>
                                <Button fullWidth variant="footer" sx={{minWidth: {xs: '45px'}}} >
                                    <img src={messenger} alt="messenger" />
                                </Button>
                            </Grid>
                            <Grid item lg={3} sm = {1.5} xs={2}>
                                <Button fullWidth variant="footer" sx={{minWidth: {xs: '45px'}}} >
                                    <img src={telegram} alt="telegram" />
                                </Button>
                            </Grid>
                            <Grid item lg={3} sm = {1.5} xs={2}>
                                <Button fullWidth variant="footer" sx={{minWidth: {xs: '45px'}}} >
                                    <img src={facebook} alt="facebook"/>
                                </Button>
                            </Grid>
                            <Grid item lg={3} sm = {1.5} xs={2}>
                                <Button fullWidth variant="footer" sx={{minWidth: {xs: '45px'}}} >
                                    <img src={vKontacte} alt="vKontacte" />
                                </Button>
                            </Grid>
                            <Grid item lg={6} sm = {3} xs={12}>
                                <Button fullWidth variant="footer" sx={{height: '100%', fontSize: {xs: 14, sm: 14, md: 16}}}>Написать нам </Button>
                            </Grid>                       
                        </Grid>
                        <Grid container spacing={2} justifyContent={'space-between'} alignItems='center'>
                            <Grid item lg={12} md={4}>
                                {!xs ? <Typography variant="h4" component='h1' color='primary' sx={{fontWeight: 800, fontSize: {xs: 20, sm: 24, md: 30}}}>8 499 391-84-49</Typography> : ''}
                            </Grid>
                            <Grid item lg={12} md={4} display='flex' sx={{justifyContent: {md: 'center', lg: 'flex-start'}}}>
                                {!xs ? <Button variant="contained" color= 'secondary' sx={{borderRadius: 15, padding: '7px 25px', fontSize: {sm: '12px', md: '16px'}}}>Заказать звонок</Button> : ''}
                            </Grid>
                            <Grid item lg={12} md={4}>
                                {!lg ? !xs ?
                                <Box display='flex' justifyContent ='flex-end' >
                                    <img src={visa} alt="visa" style={{cursor: "pointer"}}/>
                                    <img src={paypal} alt="paypal" style={{margin: '0 10px', cursor: "pointer"}}/>
                                    <img src={mastercard} alt="mastercard" style={{cursor: "pointer"}}/>
                                </Box> : '' : ''}
                            </Grid>
                        </Grid>
                            {!lg ? <Box display='flex' justifyContent='space-between' alignItems='center' marginTop={3.5}>
                                <Typography variant="body2" component='p' sx={{color: '#0E0C0D', fontSize: {xs: 11, sm: 16}, fontWeight: 600, opacity: 0.8, cursor: "pointer"}}>YaBao Все праав защищены © 2021</Typography>
                                {xs ?  
                                    <Box display='flex' justifyContent ='flex-end' >
                                        <img src={visa} alt="visa" style={{width: '30px', cursor: "pointer"}}/>
                                        <img src={paypal} alt="paypal" style={{width: '30px', margin: '0 5px', cursor: "pointer"}}/>
                                        <img src={mastercard} alt="mastercard" style={{width: '30px', cursor: "pointer"}}/>
                                    </Box> : ''}
                            </Box> : ''}
                        </Grid>
                </Grid>
            </Container>
            <Box position={"relative"} sx={{display: {xs: 'none', sm: 'block'}}}>
                {lg ? 
                <img src={footerCornerImg} alt="corenerImg"  style={{position: 'absolute', width: 350, bottom: 0, right: 0, overflow: 'hidden'}}/>
                 : !xs ?
                <img src={footerCornerImg} alt="corenerImg"  style={{position: 'absolute', width: 200, bottom: 0, right: 75, overflow: 'hidden'}}/> : ''
                }
            </Box>
        </ThemeProvider>
    )
}

export default Footer;