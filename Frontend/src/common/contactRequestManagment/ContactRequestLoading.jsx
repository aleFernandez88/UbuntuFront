import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import servicesAxios from "../../services/axios";
import { Box, Typography } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CircleIcon from '@mui/icons-material/Circle';

function ContactRequestLoading ( { datos, setDatosCompletos, setDatos, setError } ) {

    const navigate = useNavigate();
    const selection = (d) => {navigate(`/contactoSeleccionado`,{state: {id: d.id}})};

    useEffect(() => {
        const gestion = async() => {
            try {
                const response = await servicesAxios.message();
                setDatosCompletos(response);
                //mostrar solo los no gestionados la primera vez que se renderiza
                const ng = response.filter((item) => !item.managed)
                setDatos(ng);
            } catch (error) {
                setError(error);
            }
        }

        gestion();
    },[]);

    return (
        <>
            <Box>
                {datos ? (
                        datos.map((d) => (
                            <Box key={d.id} sx={{
                                backgroundColor: 'lightblue', 
                                mb: '15px',
                                height: '88px',
                                minWidth: '260px',
                                margin: { xs:'5%', sm: '2% 10%', md: '2% 20%'},
                                borderRadius:'8px',
                                justifyContent: 'space-between',
                                padding: {xs: '8px 8px 8px 16px', sm: '20px 20px 20px 30px'},
                                bgcolor: '#EAEAEA',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <Box>
                                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                                        <CircleIcon sx={{
                                            fontSize:"large", 
                                            marginRight: '5px', 
                                            marginBottom: '5px',
                                            color: d.managed === null ? 'brown' : 'green' 
                                        }}/>
                                            <Typography variant='h3' sx={{
                                                fontSize: {xs: '18px', sm: '26px'}, 
                                                mb: '5px'
                                            }}> 
                                                {d.microBusiness.name}
                                            </Typography>
                                    </Box>
                                    <Box sx={{ 
                                        width: '230px', 
                                        borderBottom: {xs: '1px solid #093c59', sm: 'px solid #093c59'}, 
                                        mb: '5px'
                                    }}>
                                    </Box>
                                    <Typography variant='p' sx={{
                                        fontSize: {xs: '16px', sm: '22px'}
                                    }}> 
                                        {d.requestDate}
                                    </Typography>
                                </Box>
                                <KeyboardArrowRightIcon onClick={()=> selection(d)}/>
                            </Box>
                    ))
                    ) : (
                        <Typography variant='body1'> No se pudieron cargar las solicitudes de contacto </Typography>
                )}
            </Box>
        </>
    )
}

export default ContactRequestLoading;