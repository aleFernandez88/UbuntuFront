import { Box, Button, Typography } from '@mui/material'
import CategoryComponent from './CategoryComponent'
import Categorias from '../../assets/Category.json'

/*
    - El boton no acepta adecuadamente la variante "containedPrimary"
    Me pasó lo mismo en la página de Login
 */
function Category() {
	return (
		<>
			<Box sx={{ textAlignLast: 'center'}}>
				<Typography variant='h5' sx={{ mt: 4, fontSize: '16px' }}>
					Microemprendimientos Ubuntu
				</Typography>
				<Typography variant='h3' sx={{ mb: 4, color: '#090909' }}>
					Categorías
				</Typography>
			</Box>

			<Box sx={{minWidth:'280px', maxWidth: '500px', margin: 'auto', padding: '0px 20px',textAlign: 'center'}}>
				{Categorias.data.map(categoria => (
					<CategoryComponent
						key={categoria.id}
						text={categoria.name}
						url={categoria.url}
					/>
				))}

				<Button variant='contained' sx={{ borderRadius: '20px', mt: '10px', minWidth: '184px'}}>
					<Typography variant='button' sx={{letterSpacing: '0px'}}>Ver más Categorías</Typography>
				</Button>
			</Box>
		</>
	)
}

export default Category
