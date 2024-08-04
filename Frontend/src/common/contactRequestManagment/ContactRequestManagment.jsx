import { Box, Typography } from "@mui/material";
import { useState } from "react";


function ContactRequestManagment ( {noGestionados, gestionados} ) {

    const [seleccion, setSeleccion] = useState('noGestionadas');

    const changeColor = (gestion) => {
        
        setSeleccion(gestion);
    };

    return (
        <Box sx={{
            mt: { xs: '20px', sm: '30px'},
            padding: { xs: '10px 15px' ,sm: '15px 20px'}
        }}>
            <Typography variant='h1' sx={{
                textAlign: 'center', 
                mb: {xs:'10px' ,sm: '20px'},
                fontSize: {xs:'24px', sm: '35px'}
                }}>
                    Solicitudes de contacto
            </Typography>
            
            <Box sx={{ 
                maxWidth: '500px',
                minWidth: '200px',
                margin: {xs: '2%', sm: '2% 20%', md: '2% 30%'},
                borderBottom: '1.5px solid',
                borderColor: '#093c59',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-evenly'}
            }>
                    <Box onClick={() => {
                            changeColor('noGestionadas'); 
                            noGestionados()}} 
                        sx={{
                            cursor: 'pointer', 
                            borderBottom: seleccion === 'noGestionadas' ? '2px solid' : '',
                            padding: {xs: '5px', sm: '10px'}
                    }}>
                            <Typography variant='h2' sx={{
                                fontWeight: 'bold', 
                                fontSize: {xs:'16px', sm: '22px'},
                                color: seleccion === 'noGestionadas' ? 'black' : 'gray'
                            }}> 
                                    No gestionadas 
                            </Typography>
                    </Box>
                    <Box onClick={() => {
                            changeColor('gestionadas'); 
                            gestionados()
                        }} 
                        sx={{
                            cursor: 'pointer',
                            borderBottom: seleccion === 'gestionadas' ? '2px solid' : '',
                            padding: {xs: '5px', sm: '10px'}
                    }}>
                            <Typography variant='h2' sx={{
                                fontWeight: 'bold', 
                                fontSize: {xs:'16px', sm: '22px'},
                                color: seleccion === 'gestionadas' ? 'black' : 'gray'
                            }}> 
                                    Gestionadas
                            </Typography>
                    </Box>
            </Box>
        </Box>
    )
}

export default ContactRequestManagment;