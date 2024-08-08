import React from "react";  
import FormMicroemprendimiento from "../../components/microBusinessForm/MicroBusinessFormPost";
import { dataForm } from "../../assets/createForm.json";
import axios from "axios";
import { ModalGeneric2 } from "../../components/modalGeneric/ModalGeneric copy";
import { useState } from "react";

export const CreateFormu = () => {  
  const title = dataForm[0].title || '';  
  const subtitle = dataForm[0].subtitle || '';  
  const button2 = dataForm[0].button2 || '';  
  const fieldLabels = dataForm[0].fieldLabels.reduce((acc, item) => {  
      return { ...acc, ...item };  
  }, {});  

  // Estado del modal  
  const [modalTitle, setModalTitle] = useState('');  
  const [modalMessage, setModalMessage] = useState('');  
  const [modalOpen, setModalOpen] = useState(false);  

  const handleModalClose = () => {  
    setModalOpen(false);  
    window.location.reload(); 
  };  
  const handleSubmit = async (formData) => {  
    const { name, description, moreInformation, city, category, subCategory, province, images } = formData;  
    const form = new FormData();  

    images.forEach((image) => {  
      form.append('file', image);   
    });  

    const microBusinessData = {  
      name,  
      description,  
      moreInformation,  
      city,  
      category: { id: category },  
      subCategory,  
      province: { id: province }  
    };  

    form.append('microBusiness', JSON.stringify(microBusinessData));  

    try {  
      const response = await axios.post('http://localhost:8080/microbusiness', form, {  
        headers: {  
          'Content-Type': 'multipart/form-data',  
        },  
      });  
      console.log('Microemprendimiento creado exitosamente:', response.data);   
       

      // Configurar el modal para éxito  
      setModalTitle('Éxito');  
      setModalMessage('Microemprendimiento cargado con éxito.');  
      setModalOpen(true);  


    } catch (error) {  
      console.error('Error al crear microemprendimiento:', error.response ? error.response.data : error.message);  
      
      setModalTitle('Error');  
      setModalMessage('Lo sentimos, el microemprendimiento no se pudo cargar.');  
      setModalOpen(true);  
    }  
  };  
  
  return (  
    <div>
    <FormMicroemprendimiento  
      title={title}   
      subtitle={subtitle}   
      button2={button2}   
      fieldLabels={fieldLabels}  
      onSubmit={handleSubmit}  
       
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
