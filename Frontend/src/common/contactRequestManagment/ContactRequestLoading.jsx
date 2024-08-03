import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import servicesAxios from "../../services/axios";
import { Box, Typography } from "@mui/material";


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
                            <Box onClick={()=> selection(d)} key={d.id}>
                                <Typography> {d.id + " " +d.email + " " + d.fullName}</Typography>
                            </Box>
                    ))
                    ) : (
                        <Typography> No se pudieron cargar las solicitudes de contacto </Typography>
                )}
            </Box>
        </>
    )
}

export default ContactRequestLoading;