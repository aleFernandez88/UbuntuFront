import React, { useEffect, useState } from "react";  
import { useParams, useNavigate } from "react-router-dom";  
import axios from 'axios';  
import FormMicroEdit from "../../components/microBusinessForm/MicroBusinessFormEdit"; 
import { ModalGeneric2 } from "../../components/modalGeneric/ModalGeneric copy";

export const EditMicroemprendimiento = () => {  
    const { id } = useParams();  
    const [microbusinessData, setMicrobusinessData] = useState(null);  
    const [loading, setLoading] = useState(true);  
    const [modalOpen, setModalOpen] = useState(false);  
    const [modalTitle, setModalTitle] = useState('');  
    const [modalMessage, setModalMessage] = useState('');  
  
    const navigate = useNavigate(); // Para redirigir después de la edición  
  
    useEffect(() => {  
        const fetchMicroBusiness = async () => {  
            try {  
                const response = await axios.get(`http://localhost:8080/microbusiness/${id}`);  
                setMicrobusinessData(response.data);  
            } catch (error) {  
                console.error('Error al cargar el microemprendimiento:', error.response ? error.response.data : error.message);  
            } finally {  
                setLoading(false);  
            }  
        };  
  
        fetchMicroBusiness();  
    }, [id]);  
    
    const handleSubmit = async (values) => {  
        try {  
            await axios.put(`http://localhost:8080/microbusiness/${id}`, values);  
            console.log(values)
            setModalTitle('Éxito');  
            setModalMessage('Microemprendimiento actualizado exitosamente!');  
            setModalOpen(true);  
        } catch (error) {  
            console.error('Error al actualizar el microemprendimiento:', error.response ? error.response.data : error.message);  
            setModalTitle('Error');  
            setModalMessage('No se pudo actualizar el microemprendimiento.');  
            setModalOpen(true);  
        }  
    };  
  
    const handleModalClose = () => {  
        setModalOpen(false);  
        navigate(`/microver/${id}`); // Redirige a la página de detalles después de cerrar el modal  
    };  
  
    if (loading) {  
        return <div>Cargando...</div>;  
    }  
  
    if (!microbusinessData) {  
        return <div>No se encontró el microemprendimiento.</div>;  
    }  
  
    return (  
        <div>  
            <FormMicroEdit  
                initial  
                initialValues={microbusinessData}  
                onSubmit={handleSubmit} // Agrega esta prop para manejar el envío  
            />  
            <ModalGeneric2   
                titulo={modalTitle}   
                mensaje={modalMessage}   
                open={modalOpen}   
                onClose={handleModalClose}   
            />   
        </div>  
    );  
};