import { Box, Typography } from "@mui/material";
import economiaS from '../../assets/images/category/economia-social.png';


/* 
    - Hacerlo CLICKEABLE
    - El Contenedor de la imagen le puse un padding para que sea circular, pero creo que no es optimo hacerlo asi
    - Falta agregarle bien los estilos, ya sea usando el Theme o como aparece en el figma
*/
function CategoryComponent ({text, url}) {

    return (
        <>
            <Box sx={{
                backgroundColor: "lightgray",
                mb: '20px',
                borderRadius: 5,
                display: "block",
                padding: "15px 25px"}}>
                <Box sx={{border: "1px solid green" , borderRadius: "50px", padding: "6px 6px 3px 6px", float: "left"}}>
                    <img src={url} width='33' height='33' alt='Logo U Ingreso'></img>
                </Box>
                <Typography variant="h2" sx={{alignContent: "center", borderBottom: "2px solid green"}}>{text}</Typography>  
            </Box>
        </>
    )
}

export default CategoryComponent;