import * as React from 'react';  
import Box from '@mui/material/Box';  
import Button from '@mui/material/Button';  
import Typography from '@mui/material/Typography';  
import Modal from '@mui/material/Modal';  

const style = {  
    position: 'absolute',  
    top: '50vh',  
    left: '50%',  
    transform: 'translate(-50%, -50%)',  
    width: '328px',  
    height:'124px',
    bgcolor: 'background.paper',  
    border: '2px solid #000',  
    boxShadow: 24,  
    p: 4,  
    fontFamily:'Lato',
    fontSize: '18px'

};  

export const ModalGeneric2 = ({ titulo, mensaje, open, onClose }) => {  

    return (  
        <Modal  
            open={open}  
            onClose={onClose}  
            aria-labelledby='modal-modal-title'  
            aria-describedby='modal-modal-description'  
        >  
            <Box sx={style}>  
                <Typography id='modal-modal-title' variant='h6' component='h2'>  
                    {titulo}  
                </Typography>  
                <Typography id='modal-modal-description' sx={{ mt: 2 }}>  
                    {mensaje}  
                </Typography>  
                <Typography variant="h5">
                <Button onClick={onClose} variant="contained" sx={{ mt: 2 }}>  
                    Aceptar  
                </Button>  
                </Typography>
            </Box>  
        </Modal>  
    );  
};