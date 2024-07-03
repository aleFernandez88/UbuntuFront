import logoCard from '../assets/images/loginPage/logo card ingreso registro.png'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { Box, Typography } from '@mui/material';

function LoginCard() {

    return (
        <Card sx={{height: 352, 
            marginRight: '16px', 
            marginLeft: '16px',
            borderRadius: 2, 
            display: 'flex', 
            justifyContent: 'start', 
            flexDirection: 'column', 
            paddingTop: '20px', 
            alignItems: 'center'}}
        > 
            <Box 
                display='block'
                textAlign='center'>
                    <Typography 
                        sx={{mt: 2 ,
                        fontSize: '28px', 
                        lineHeight: '32px', 
                        color: '#090909', 
                        fontWeight: 700, 
                        mb: '20px'}}>
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
                    <Typography 
                        sx={{fontWeight: '700', 
                            fontSize: '16px', 
                            lineHeight: '30px'}}>
                                Continuá con Google
                    </Typography>
            </Button>
            
        </Card>
    )
}

export default LoginCard;