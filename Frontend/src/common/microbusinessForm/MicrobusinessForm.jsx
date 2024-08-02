import React, { useState } from 'react';  
import { Container, TextField, MenuItem, Button, Typography, Box, Grid } from '@mui/material'; 
import UploadIcon from '@mui/icons-material/Upload';
import { styled } from '@mui/material/styles';  



const CustomTextField = styled(TextField)(({ theme }) => ({  
  ...theme.typography.cf1,  
}));  

const FormularioMicroemprendimiento = ({  
  title,  
  subtitle, 
  button2, 
  fieldLabels,  
}) => {  
  const [nombre, setNombre] = useState('');  
  const [categoria, setCategoria] = useState('');  
  const [subcategoria, setSubcategoria] = useState('');  
  const [pais, setPais] = useState('');  
  const [provincia, setProvincia] = useState('');  
  const [ciudad, setCiudad] = useState('');  
  const [descripcion, setDescripcion] = useState('');  
  const [informacion, setInformacion] = useState('');  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    console.log({  
      nombre,  
      categoria,  
      subcategoria,  
      pais,  
      provincia,  
      ciudad,  
      descripcion,  
      informacion,  
    });  
  };  

  const handleImageUpload = () => {  
    // Lógica para manejar la carga de imágenes  
    console.log("Subir imagen");  
  };


  return (  
    <Container maxWidth="sm">  
      <Typography variant="h6" gutterBottom sx={{ marginTop: '2rem' }}>  
        {title}  
      </Typography>  
      <Typography variant="body1" gutterBottom sx={{ fontSize: '20px', color: 'black', fontFamily: 'Lato', margin: '1.5rem', textAlign: 'center', lineHeight:"25px"}}>  
        {subtitle}  
      </Typography>  
      <form onSubmit={handleSubmit}>  

        <CustomTextField  
          label={<Typography variant="cf1">{fieldLabels.nombre.label}</Typography>}  
          fullWidth  
          margin="normal"  
          value={nombre}  
          onChange={(e) => setNombre(e.target.value)}  
          required  
        />  
        <Typography variant="cf2" sx={{marginLeft:"1rem"}}>{fieldLabels.nombre.subtitle}</Typography> 

        <CustomTextField  
          label={<Typography variant="cf1">{fieldLabels.categoria.label}</Typography>}  
          fullWidth  
          margin="normal"  
          select  
          value={categoria}  
          onChange={(e) => setCategoria(e.target.value)}  
          required  
        >  
      
            <MenuItem >{<Typography variant="cf1" sx={{whiteSpace: 'normal', wordWrap: 'break-word', margin:'0 1rem 0 1rem'}}>{fieldLabels.categoria.item1}</Typography>} </MenuItem>  
            <MenuItem >{<Typography variant="cf1" sx={{whiteSpace: 'normal', wordWrap: 'break-word', margin:'0 1rem 0 1rem'}}>{fieldLabels.categoria.item2}</Typography>}</MenuItem>  
            <MenuItem >{<Typography variant="cf1" sx={{whiteSpace: 'normal', wordWrap: 'break-word', margin:'0 1rem 0 1rem'}}>{fieldLabels.categoria.item3}</Typography>} </MenuItem>  
            <MenuItem >{<Typography variant="cf1" sx={{whiteSpace: 'normal', wordWrap: 'break-word', margin:'0 1rem 0 1rem'}}>{fieldLabels.categoria.item4}</Typography>}</MenuItem>  

          
             
               
            
         
        </CustomTextField>  
        <Typography variant="cf2" sx={{marginLeft:"1rem"}}>{fieldLabels.categoria.subtitle}</Typography> {/* Subtítulo */}  

        <CustomTextField  
          label={<Typography variant="cf1">{fieldLabels.subcategoria.label}</Typography>}  
          fullWidth  
          margin="normal"  
          value={subcategoria}  
          onChange={(e) => setSubcategoria(e.target.value)}  
          
        />  
        <Typography variant="cf2" sx={{marginLeft:"1rem"}}>{fieldLabels.subcategoria.subtitle}</Typography> {/* Subtítulo */}  

        <CustomTextField  
          label={<Typography variant="cf1">{fieldLabels.pais.label}</Typography>}  
          fullWidth  
          margin="normal"
          select  
          value={pais}  
          onChange={(e) => setPais(e.target.value)}  
            >
          <MenuItem >{<Typography variant="cf1" sx={{whiteSpace: 'normal', wordWrap: 'break-word', margin:'0 1rem 0 1rem'}}>{fieldLabels.pais.item1}</Typography>} </MenuItem>  
          <MenuItem >{<Typography variant="cf1" sx={{whiteSpace: 'normal', wordWrap: 'break-word', margin:'0 1rem 0 1rem'}}>{fieldLabels.pais.item2}</Typography>}</MenuItem>  
          <MenuItem >{<Typography variant="cf1" sx={{whiteSpace: 'normal', wordWrap: 'break-word', margin:'0 1rem 0 1rem'}}>{fieldLabels.pais.item3}</Typography>} </MenuItem>  
          <MenuItem >{<Typography variant="cf1" sx={{whiteSpace: 'normal', wordWrap: 'break-word', margin:'0 1rem 0 1rem'}}>{fieldLabels.pais.item4}</Typography>}</MenuItem>  
         </CustomTextField>
        <Typography variant="cf2" sx={{marginLeft:"1rem"}}>{fieldLabels.pais.subtitle}</Typography> {/* Subtítulo */}  

        <CustomTextField  
          label={<Typography variant="cf1">{fieldLabels.provincia.label}</Typography>}  
          fullWidth  
          margin="normal"  
          value={provincia}  
          onChange={(e) => setProvincia(e.target.value)}  
          required  
          select  >
          <MenuItem >{<Typography variant="cf1" sx={{whiteSpace: 'normal', wordWrap: 'break-word', margin:'0 1rem 0 1rem'}}>{fieldLabels.provincia.item1}</Typography>} </MenuItem>  
          <MenuItem >{<Typography variant="cf1" sx={{whiteSpace: 'normal', wordWrap: 'break-word', margin:'0 1rem 0 1rem'}}>{fieldLabels.provincia.item2}</Typography>}</MenuItem>  
          <MenuItem >{<Typography variant="cf1" sx={{whiteSpace: 'normal', wordWrap: 'break-word', margin:'0 1rem 0 1rem'}}>{fieldLabels.provincia.item3}</Typography>} </MenuItem>  
          <MenuItem >{<Typography variant="cf1" sx={{whiteSpace: 'normal', wordWrap: 'break-word', margin:'0 1rem 0 1rem'}}>{fieldLabels.provincia.item4}</Typography>}</MenuItem>   
        <Typography variant="body2" color="textSecondary">{fieldLabels.provincia.subtitle}</Typography> {/* Subtítulo */}  
        </CustomTextField>
        <CustomTextField  
          label={<Typography variant="cf1">{fieldLabels.ciudad.label}</Typography>}  
          fullWidth  
          margin="normal"  
          value={ciudad}  
          onChange={(e) => setCiudad(e.target.value)}  
          required  
        />  
        <Typography variant="cf2" sx={{marginLeft:"1rem"}}>{fieldLabels.ciudad.subtitle}</Typography> {/* Subtítulo */}  

        <CustomTextField  
          label={<Typography variant="cf1">{fieldLabels.descripcion.label}</Typography>}  
          fullWidth
          margin="normal"  
          multiline  
          rows={6}  
          value={descripcion}  
          onChange={(e) => setDescripcion(e.target.value)}  
          inputProps={{ maxLength: 300 }}  
          required  
        />  
        <Typography variant="cf2" sx={{marginLeft:"1rem"}}>{fieldLabels.descripcion.subtitle}</Typography> {/* Subtítulo */}  

        <CustomTextField  
          label={<Typography variant="cf1">{fieldLabels.informacion.label}</Typography>}  
          fullWidth  
          margin="normal"  
          multiline  
          rows={6}  
          value={informacion}  
          onChange={(e) => setInformacion(e.target.value)}  
          inputProps={{ maxLength: 200 }}  
          required  
        />  
        <Typography variant="cf2" sx={{marginLeft:"1rem"}}>{fieldLabels.informacion.subtitle}</Typography> {/* Subtítulo */}  
        <Grid container spacing={2}>   
          <Grid item xs={6}>  </Grid>  
      <Grid item xs={6}>  
        <Box  
      sx={{  
        display: 'flex',  
        flexDirection: 'column',  
        justifyContent: 'flex-end',
        padding: 2,  
        border: 'none',  
        borderRadius: '8px',  
        width: '300px', // Ajusta el ancho según sea necesario  
        margin: ' 1rem auto',  
      }}  
    >  
      <Button  
        variant="contained"  
        component="label"  
        onClick={handleImageUpload}  
        sx={{ marginBottom: 2, borderRadius:'100px', width:'162px', height:'42px', padding:'10px, 16px, 10px, 16px', display: 'flex', // Para que el icono y el texto estén en línea  
          alignItems: 'center', // Centra verticalmente los elementos  
          justifyContent: 'flex-start'  }} 
      >  
        <UploadIcon sx={{color:'white', marginRight: 1, width:'24px', height:'24px'}} /> 
        <Typography variant="button" sx={{ fontSize:'14px'}} >Subir imagen</Typography>  
        <input  
          type="file"  
          hidden  
          align="right"
          accept="image/*"  
          multiple  
        />  
      </Button>  
      <Typography variant="body2" color="textSecondary" align="left" width="152px">  
        *Requerida al menos una imagen  
      </Typography>  
      <Typography variant="body2" color="textSecondary" align="left" width="152px">  
        Hasta 3 imágenes. Máximo 3Mb cada una.  
      </Typography>  
      </Box>
      </Grid>
      </Grid>
      <Box
       display="flex"  
       justifyContent="center"  // Centra horizontalmente  
          >
      <Button  
        variant="contained"   
        align= "center"
        width= "328px"
        sx={{ marginTop: 2, backgroundColor: '#6E6F70', borderRadius:'100px', fontSize:'16px', width:'328px', justifyContent:'center' }}  
      >  
        { button2 }
      </Button>  
    </Box>  
      </form>  
    </Container>  
  );  
};  

export default FormularioMicroemprendimiento;
