import { Box, Button, Link, Typography } from '@mui/material'
import CategoryComponent from './CategoryComponent'

import { useEffect, useState } from 'react'
import servicesAxios from '../../services/axios';

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
			<Box sx={{ textAlignLast: 'center'}}>
				<Typography variant='h5' sx={{ mt: 4, fontSize: '16px' }}>
					Microemprendimientos Ubuntu
				</Typography>
				<Typography variant='h3' sx={{ mb: 4, color: '#090909' }}>
					Categorías
				</Typography>
			</Box>

			<Box sx={{minWidth:'280px', maxWidth: '500px', margin: 'auto', padding: '0px 20px',textAlign: 'center'}}>
				{datos ? (
					datos.slice(0, 3).map(categoria => (
                        <Link underline='none' href={'/categoriaSeleccionada/'+categoria.id}>
                            <CategoryComponent
                                key={categoria.id}
                                text={categoria.name}
                                url={''}
                            />
                        </Link>
					))
				) : (
					<Typography variant='body1' sx={{mb: '10px'}}> Cargando categorias...</Typography>
				)}

				{/* aplicar hundleClick no LINK: AVERIGUAR */}
				<Link underline='none' href={'/emprendimientos'}>
					<Button variant='contained' sx={{ borderRadius: '20px', mt: '10px', minWidth: '184px'}}>
						<Typography variant='button' sx={{letterSpacing: '0px'}}>Ver más Categorías</Typography>
					</Button>
				</Link>
			</Box>
		</>
	)
}

export default Category
