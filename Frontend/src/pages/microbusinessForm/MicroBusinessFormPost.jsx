import React from "react";  
import FormMicroemprendimiento from "../../components/microBusinessForm/MicroBusinessFormPost";
import { dataForm } from "../../assets/createForm.json";
import axios from "axios";

export const CreateFormu = () => {  
  const title = dataForm[0].title || '';  
  const subtitle = dataForm[0].subtitle || '';  
  const button2 = dataForm[0].button2 || '';  
  const fieldLabels = dataForm[0].fieldLabels.reduce((acc, item) => {  
      return { ...acc, ...item };  
  }, {});  
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
      alert('Microemprendimiento cargado con éxito');   

    } catch (error) {  
      console.error('Error al crear microemprendimiento:', error.response ? error.response.data : error.message);  
      alert('Lo sentimos, el microemprendimiento no se pudo cargar');  
    }  
  };  
  
  return (  
    <FormMicroemprendimiento  
      title={title}   
      subtitle={subtitle}   
      button2={button2}   
      fieldLabels={fieldLabels}  
      onSubmit={handleSubmit}  
       
    />  
  );  
};
