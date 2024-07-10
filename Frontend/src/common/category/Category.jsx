import { Box, Button, Typography } from "@mui/material";
import CategoryComponent from "./CategoryComponent";
import Categorias from '../../assets/Category.json';

/*
    - El boton no acepta adecuadamente la variante "containedPrimary"
    Me pasó lo mismo en la página de Login
 */
function Category () {

    return (
        <>
            <hr></hr>
            <Box sx={{textAlignLast: "center"}}>
                <Typography variant="h2" sx={{mt: 4}}>Microemprendimientos Ubuntu</Typography>
                <Typography variant="h4" sx={{mb: 4}}>Categorías</Typography>
            </Box>
            
            <Box sx={{margin: "0px 10px", textAlign: "center"}}>
                {Categorias.data.map((categoria) => (
                    <CategoryComponent key={categoria.id} text={categoria.name} url={categoria.url}/>
                ) )}

                <Button variant="contained" sx={{borderRadius: "20px", mt: "10px"}}> 
                    <Typography variant="button">Ver más Categorías</Typography>
                </Button>
            </Box> 
            
            
        </>
    )
}

export default Category;