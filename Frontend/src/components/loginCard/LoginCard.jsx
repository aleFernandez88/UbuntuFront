import logoCard from '../../assets/images/loginPage/logo card ingreso registro.png'
import logoButton from '../../assets/images/loginPage/google-logo.png'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { Box, Typography } from '@mui/material';

function LoginCard() {

    return (
        <Card sx={{height: 352, 
            // marginRight: '16px', 
            // marginLeft: '16px',
            margin: '0 16px',
            borderRadius: 2, 
            display: 'flex',
            alignItems: 'center', 
            justifyContent: 'start', 
            flexDirection: 'column', 
            paddingTop: '20px', }}
        > 
            <Box 
                display='block'
                textAlign='center'
                mb='10px'>
                    <Typography variant='p'
                        sx={{mt: 2 ,
                        display: 'block',
                        textAlign: 'center',
                        lineHeight: '32px', 
                        fontWeight: 700, 
                        mb: '23px'}}
                        >
                            Ingreso <br/>Administrador
                    </Typography>
                    <img src={logoCard} width='33' height='75' alt='Logo U Ingreso'></img>
            </Box>
            <Button variant='contained' 
                sx={{mt: '60px' ,
                borderRadius: '100px', 
                width: '200px', 
                height: '40px', 
                gap: '4px'}}> 
                    <img src={logoButton} width='24px' height='24px'></img>
                    <Typography variant='button'
                        sx={{fontSize: '14px', 
                            lineHeight: '30px',
                            width: '150px',
                            height: '30px',
                            letterSpacing: '0'}}
                            >
                                Continuá con Google
                    </Typography>
            </Button>
            
        </Card>
    )
}

export default LoginCard;