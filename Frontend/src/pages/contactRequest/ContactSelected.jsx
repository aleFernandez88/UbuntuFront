import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import servicesAxios from "../../services/axios";
import ContactForm from "../../common/contactForm/ContactForm";
import ContactRequestManagment from "../../common/contactRequestManagment/ContactRequestManagment";


function ContactSelected () {
    const location = useLocation();
    const { dato } = location.state;
    let gestion = false;
    
    if(dato.managed) gestion = true;
    // else gestion = false;
    /* mostrar datos y la seleccion para cambiar a GESTIONADO */
    return (
        <>
            <ContactRequestManagment datoGestionado={gestion} gestionar={false}/>
            <ContactForm dato={dato}/> 
        </>
    )
}

export default ContactSelected;