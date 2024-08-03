import { Box, Typography } from "@mui/material";


function ContactRequestManagment ( {noGestionados, gestionados} ) {

    return (
        <Box sx={{
            mt: '20px',
            padding: '10px 15px'
        }}>
            <Typography variant='h1' sx={{
                textAlign: 'center', 
                mb: '20px',
                }}>
                    Solicitudes de contacto
            </Typography>
            
            <Box sx={{ 
                maxWidth: '400px',
                minWidth: '200px',
                margin: 'auto',
                borderBottom: '1px solid',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-evenly'}}>
                    <Box onClick={noGestionados} sx={{cursor: 'pointer'}}>
                        <Typography variant='h5'> No gestionadas </Typography>
                    </Box>
                    <Box onClick={gestionados} sx={{cursor: 'pointer'}}>
                        <Typography variant='h5'> Gestionadas</Typography>
                    </Box>
            </Box>
        </Box>
    )
}

export default ContactRequestManagment;