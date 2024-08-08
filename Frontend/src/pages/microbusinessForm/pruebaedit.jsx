import React, { useEffect, useState } from "react";  
import { useParams } from "react-router-dom";  
import FormMicroemprendimiento from "../../components/microBusinessForm/MicroBusinessFormPost";  
import { dataForm } from "../../assets/editForm.json";  
import axios from 'axios';  

export const EditFormu = () => {  
  const { id } = useParams();  // Obtener el ID de la URL  
  const [formData, setFormData] = useState(null);  
  const [loading, setLoading] = useState(false);  
  
  const title = dataForm[0].title || '';  
  const subtitle = dataForm[0].subtitle || '';  
  const button2 = dataForm[0].button2 || '';  
  const fieldLabels = dataForm[0].fieldLabels.reduce((acc, item) => ({  
    ...acc,  
    ...item  
  }), {});  

  // Effect para cargar la información del microemprendimiento  
  useEffect(() => {  
    const fetchMicroBusiness = async () => {  
      try {  
        const response = await axios.get(`http://localhost:8080/microbusiness/${id}`);  
        const data = response.data;  
        
        // Suponiendo que la respuesta tiene la misma estructura que el formulario  
        setFormData({  
          name: data.name,  
          description: data.description,  
          moreInformation: data.moreInformation,  
          city: data.city,  
          category: data.category.id,  
          subCategory: data.subCategory,  
          province: data.province.id,  
          // Puedes cargar imágenes aquí si es necesario  
        });  
      } catch (error) {  
        console.error('Error al cargar microemprendimiento:', error.response ? error.response.data : error.message);  
      }  
    };  

    fetchMicroBusiness();  
  }, [id]);  

  const handleSubmit = async (formData) => {  
    setLoading(true);
    const { name, description, moreInformation, city, category, subCategory, province} = formData;  
    const form = new FormData();  

    if (values.images && values.images.length > 0) {  
        values.images.forEach((image) => {  
            formData.append('images', image); // 'images' debe coincidir con el nombre esperado en el backend  
        });  
    }  

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
        const response = await axios.put(`http://localhost:8080/microbusiness/${id}`, formData, {  
            headers: {  
                'Content-Type': 'multipart/form-data',  
            }  
        });  
        console.log('Microemprendimiento actualizado exitosamente:', response.data);  
        alert('Microemprendimiento actualizado con éxito');   
    } catch (error) {  
        console.error('Error al actualizar microemprendimiento:', error.response ? error.response.data : error.message);  
        alert('Lo sentimos, el microemprendimiento no se pudo actualizar');  
    } finally {  
        setLoading(false); // Restablece el estado de carga  
    }  
};  

// Si no hay datos cargados aún, muestra un mensaje  
if (!formData) {  
    return <div>Cargando...</div>;  
}  

// Muestra un mensaje de carga si está en proceso  
if (loading) {  
    return <div>Cargando...</div>;  
}  

  return (  
    <FormMicroemprendimiento  
      title={title}   
      subtitle={subtitle}   
      button2={button2}   
      fieldLabels={fieldLabels}   
      onSubmit={handleSubmit}  
      initialValues={formData} // Si deseas prellenar el formulario  
    />  
  );  
}; 