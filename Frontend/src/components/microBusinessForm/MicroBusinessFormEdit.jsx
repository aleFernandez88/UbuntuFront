import React from 'react';  
import { Container, TextField, Typography, MenuItem, Button, Box} from '@mui/material';   
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { useEffect } from 'react';
import { dataForm } from "../../assets/editForm.json";

const CustomTextField = styled(TextField)(({ theme }) => ({  
    ...theme.typography.cf1,  
  }));  



const FormMicroEdit = ({ initialValues, onSubmit }) => {  
    const [formData, setFormData] = useState(initialValues);  
    const categories = dataForm[0].fieldLabels[0].categoria;
    const provinces = dataForm[0].fieldLabels[0].provincia;
  

    
    useEffect(() => {  
        setFormData(initialValues);  
    }, [initialValues]);  

    const handleChange = (event) => {  
        const { name, value } = event.target;  
      
  if (name === "category" || name === "province") {  
    
    setFormData({  
      ...formData,  
      [name]: { id: value }, 
    });  
  } else {  
    
    setFormData({  
      ...formData,  
      [name]: value,  
    });  
  }  
};  

    const handleSubmit = (e) => {  
        e.preventDefault();  
        onSubmit(formData); 
    };  

    return (  
        <Container maxWidth="sm">  
            <Typography variant="h6" gutterBottom sx={{ marginTop: '2rem' }}>  
                Edicion de Microemprendimiento
            </Typography>  
            <Typography variant="body1" gutterBottom sx={{ fontSize: '20px', color: 'black', fontFamily: 'Lato', margin: '1.5rem', textAlign: 'center', lineHeight:"25px"}}>  
                Edita el formulario de carga del Micoremprendimiento 
            </Typography>  

            <form onSubmit={handleSubmit}>  
                <CustomTextField  
                    id="nombre"  
                    label={<Typography variant="cf1">Nombre del Microemprendimiento</Typography>}  
                    fullWidth  
                    margin="normal"  
                    name="name" 
                    value={formData.name || ''}   
                    onChange={handleChange}  
                />  

            <CustomTextField  
            id="categoria"  
            label={<Typography variant="cf1">{categories.label}</Typography>}  
            fullWidth  
            margin="normal"  
            name="category"   
            value={formData.category?.id || ''}  
            onChange={handleChange}  
             select  
>  
            {Object.values(categories).map((categoria) => (  
            <MenuItem key={categoria.id} value={categoria.id}>   
            <Typography variant="cf1" sx={{ whiteSpace: 'normal', wordWrap: 'break-word', margin: '0 1rem 0 1rem' }}>  
                {categoria.name}  
            </Typography>  
            </MenuItem>   
             ))}  
            </CustomTextField> 
            
                <CustomTextField  
                    id="subCategoria"  
                    label={<Typography variant="cf1">Subcategoria</Typography>}  
                    fullWidth  
                    margin="normal"  
                    name="subCategory" // Asegúrate de que el nombre coincida con el que esperas en los valores  
                    value={formData.subCategory || ''}   
                    onChange={handleChange}  
                />   
                 
                <CustomTextField  
                    id="provincia"  
                    label={<Typography variant="cf1">Provincia</Typography>}  
                    fullWidth  
                    margin="normal"    
                    name="province" // Cambia esto para reflejar correctamente tu estructura de datos  
                    value={formData.province?.id || ''}   
                    onChange={handleChange}  
                    select
                >   
                 {Object.values(provinces).filter(item => item.id).map((province) => (  
                        <MenuItem key={province.id} value={province.id}>  
                            {province.name}  
                        </MenuItem>  
                    ))}  
                    </CustomTextField>

                <CustomTextField  
                    id="ciudad"   
                    label={<Typography variant="cf1">Ciudad</Typography>}  
                    fullWidth  
                    margin="normal"  
                    name="city" // Cambia esto para reflejar correctamente tu estructura de datos  
                    value={formData.city || ''}   
                    onChange={handleChange}  
                />  
        
                <CustomTextField  
                    id="descripcion"  
                    label={<Typography variant="cf1">Descripcion</Typography>}  
                    fullWidth  
                    margin="normal"  
                    multiline  
                    rows={6}  
                    name="description" // Cambia esto para reflejar correctamente tu estructura de datos  
                    value={formData.description || ''}  
                    onChange={handleChange}  
                />  
        
                <CustomTextField   
                    id="masInformacion"   
                    label={<Typography variant="cf1">Mas Informacion</Typography>}  
                    fullWidth  
                    margin="normal"  
                    multiline  
                    rows={6}  
                    name="moreInformation" // Cambia esto para reflejar correctamente tu estructura de datos  
                    value={formData.moreInformation || ''}  
                    onChange={handleChange}  
                />  

                    <Box display="flex" justifyContent="space-between" sx={{ marginTop: '1rem' }}>  
                    {initialValues.images.map((image) => (  
                    <Box key={image.id} sx={{ flexGrow: 1, padding: '0.5rem', textAlign: 'center', position: 'relative' }}>  
                    <img   
                    src={image.url}   
                    alt={image.name}   
                    style={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'cover' }}   
                    onClick={() => window.open(image.url, "_blank")} // Abrir imagen en nueva pestaña  
                    />  
                    </Box>  
                     ))}  
                    </Box>   

                    <Button  
                    variant="contained"   
                    align= "center"
                    width= "328px"
                    onClick={handleSubmit}
                    sx={{ marginTop: 2, backgroundColor: '#6E6F70', borderRadius:'100px', fontSize:'16px', width:'328px', justifyContent:'center', marginBottom: 2}}  
                        > Guardar Cambios
                        </Button>  
                        </form>        
                    </Container>  
    );  
};

export default FormMicroEdit;