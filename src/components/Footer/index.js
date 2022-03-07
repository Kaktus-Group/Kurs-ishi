import { Box, Button, Container, createTheme, ThemeProvider, Typography } from "@mui/material";
import React from "react";
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
                    }
                }
            ]
        }
    }
})


const Footer = () => {
    return (
        <ThemeProvider theme={theme}>
            
            <Container sx={{pt: 4,  pb: 7.5, position: 'relative'}}>
                <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 7, alignItems: 'center'}}>
                    <Box>
                        <img src={logo} alt="logo" width='90px' style={{display: 'inline', cursor: "pointer"}}/>
                        <Box sx={{display: 'flex', mt: 4}}>
                            <Typography variant="body1" component='p' sx={{fontWeight: 700}}>Калорийность и состав</Typography>
                            <Typography variant="body1" component='p' sx={{fontWeight: 700, ml: 6.5}}>Правовая информация</Typography>
                        </Box>
                        <Box sx={{mt: 3}}>
                            <Typography variant="body1" component='p' sx={{fontWeight: 700}}>Мы в соцсетях</Typography>
                            <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, mt: 2}}>
                                <Typography variant="body2" component='p' sx={{color: '#0E0C0D', fontWeight: 600, opacity: 0.7, cursor: "pointer"}}>YouTube</Typography>
                                <Typography variant="body2" component='p' sx={{color: '#0E0C0D', fontWeight: 600, opacity: 0.7, cursor: "pointer"}}>Facebook</Typography>
                                <Typography variant="body2" component='p' sx={{color: '#0E0C0D', fontWeight: 600, opacity: 0.7, cursor: "pointer"}}>Москва ул. Проспект</Typography>
                                <Typography variant="body2" component='p' sx={{color: '#0E0C0D', fontWeight: 600, opacity: 0.7, cursor: "pointer"}}>Instagram</Typography>
                                <Typography variant="body2" component='p' sx={{color: '#0E0C0D', fontWeight: 600, opacity: 0.7, cursor: "pointer"}}>ВКонтакте</Typography>
                                <Typography variant="body2" component='p' sx={{color: '#0E0C0D', fontWeight: 600, opacity: 0.7, cursor: "pointer"}}>Вернадского 86В</Typography>
                            </Box>
                        </Box>
                        <Box sx={{mt: 6, display: 'flex', alignItems: "center", justifyContent: 'space-between'}}>
                            <Typography variant="body2" component='p' sx={{color: '#0E0C0D', fontWeight: 600, opacity: 0.8, cursor: "pointer"}}>YaBao Все праав защищены © 2021</Typography>
                            <Box display='flex'>
                                <img src={visa} alt="visa" style={{cursor: "pointer"}}/>
                                <img src={paypal} alt="paypal" style={{margin: '0 24px', cursor: "pointer"}}/>
                                <img src={mastercard} alt="mastercard" style={{cursor: "pointer"}}/>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Typography variant="body1" component='p' sx={{fontWeight: 700}}>Остались вопросы? А мы всегда на связи:</Typography>
                        <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, mt: 4, mb: 6}}>
                            <Button variant="footer">
                                <img src={viber}v alt="viber" />
                            </Button>
                            <Button variant="footer">
                                <img src={skype}v alt="skype" />
                            </Button>
                            <Button variant="footer">
                                <img src={messenger}v alt="messenger" />
                            </Button>
                            <Button variant="footer">
                                <img src={telegram}v alt="telegram" />
                            </Button>
                            <Button variant="footer">
                                <img src={facebook}v alt="facebook" />
                            </Button>
                            <Button variant="footer">
                                <img src={vKontacte}v alt="vKontacte" />
                            </Button>
                            <Button variant="footer" sx={{gridColumn: '3 / 5'}}>Написать нам </Button>
                        </Box>
                        <Typography variant="h4" component='h1' color='primary' sx={{fontWeight: 800, fontSize: 30}}>8 499 391-84-49</Typography>
                        <Button variant="contained" color= 'secondary' sx={{borderRadius: 15, padding: '7px 28px', mt: 2.5}}>Заказать звонок</Button>
                    </Box>
                </Box>
            </Container>
            <Box position={"relative"}>

                <img src={footerCornerImg} alt="corenerImg"  style={{position: 'absolute', bottom: 0, right: 0, overflow: 'hidden'}}/>
            </Box>
        </ThemeProvider>
    )
}

export default Footer;