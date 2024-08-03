import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import servicesAxios from "../../services/axios";


function ContactSelected () {
    const location = useLocation();
    const { id } = location.state;
    const [ datos, setDatos ] = useState("");
    const [ error, setError ] = useState("");

    useEffect(() => {
        const contact = async() => {
            try {
                const response = await servicesAxios.messageId(id)
                setDatos(response);
                console.log(response);
            } catch (error) {
                setError(error);
            }
        }

        contact();
    },[])
    /* mostrar datos y la seleccion para cambiar a GESTIONADO */
    return (
        <>
            {datos.email + " || "}
            {datos.fullName+ " || "}
            {datos.message+ " || "}
            {datos.phone+ " || "}
            {datos.requestDate+ " || "}
            {datos.microBusinessId+ " || "}
            {datos.managed+ " || "}
        </>
    )
}

export default ContactSelected;