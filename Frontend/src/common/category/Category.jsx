import { Box, Button, Typography } from '@mui/material'
import CategoryComponent from './CategoryComponent'
import { useEffect, useState } from 'react'
import servicesAxios from '../../services/axios';
// import Categorias from '../../assets/Category.json'

/*
    - El boton no acepta adecuadamente la variante "containedPrimary"
    Me pasó lo mismo en la página de Login
 */
function Category() {
	const [datos, setDatos] = useState("");
	const [error, setError] = useState("");

	useEffect(() => {
		
		const category = async() => {
			try {
				const response = await servicesAxios.category();
				setDatos(response);
				// console.log(response[0].name)
			} catch (error) {
				setError(error);
			}
		}

		category();
		
	},[]);

	return (
		<>
			<hr></hr>
			<Box sx={{ textAlignLast: 'center' }}>
				<Typography variant='h2' sx={{ mt: 4 }}>
					Microemprendimientos Ubuntu
				</Typography>
				<Typography variant='h4' sx={{ mb: 4 }}>
					Categorías
				</Typography>
			</Box>

			<Box sx={{ margin: '0px 10px', textAlign: 'center' }}>
				{error && (
					<Typography variant='body1' color='error'>
						No se pudieron cargar las categorias
					</Typography>
				)}
				{datos ? (
					datos.map(categoria => (
						<CategoryComponent
							key={categoria.id}
							text={categoria.name}
							url={''}
						/>
					))
				) : (
					<Typography variant='body1'> Cargando categorias...</Typography>
				)}
				


				<Button variant='contained' sx={{ borderRadius: '20px', mt: '10px' }}>
					<Typography variant='button'>Ver más Categorías</Typography>
				</Button>
			</Box>
		</>
	)
}

export default Category
