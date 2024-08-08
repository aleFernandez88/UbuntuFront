import { Box, Button, Typography } from "@mui/material"
import CardContactRequest from "../../components/cardContactRequest/CardContactRequest"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import servicesAxios from "../../services/axios";

export const UndertakingsAdmin = () => {

    const [microE, setMicroE] = useState('');

    const dato = [
        {id: 1, title: 'FarmaEco', description: 'Mucha Info'}, 
        {id: 2, title: 'EcoSenda', description: 'Mucha Info'}
    ]

    const navigate = useNavigate();
    const seleccion = (m) => {navigate(`/dashboard`,{state: {microemprendimiento: m}})}

    useEffect(() => {
        const cargarEmprendimientos = async() => {
            const response = await servicesAxios.undertakingsAll();
            setMicroE(response);
        }

        cargarEmprendimientos();
    },[microE]);

    return (
        <>
            <Box sx={{
                mt: '50px',
                textAlign: 'center',
            }}>
                <Typography variant='h1'
                    sx={{
                        fontSize: '28px',
                        letterSpacing: '0.5px'
                }}>
                    Microemprendimientos
                </Typography>
                <Button variant="contained"
                    sx={{
                    borderRadius: '100px',
                    maxWidth: '328px',
                    minWidth: '300px',
                    height: '40px',
                    gap: '4px',
                    margin: 'auto',
                    mt: '30px',
                    mb: '35px'
                }}>
                    <Typography variant='button' sx={{ letterSpacing: '0px' }}>
                    Cargar Microemprendimiento
					</Typography>
                </Button>
            </Box>

            <Box>
                {
                    microE? (
                        microE.map((m) => (
                            <CardContactRequest id={m.id} title={m.name} description={m.subCategory} metodoClickArrow={seleccion} datoMetodoClick={m} optionCircle={false} />
                        ))
                    ) : (
                        <Typography>
                            No se pudieron cargar los datos
                        </Typography>
                    )
                }
            </Box>
        </>
    )
}