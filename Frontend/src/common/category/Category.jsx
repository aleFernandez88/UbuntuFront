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
			<Box sx={{minWidth:'280px', maxWidth: '500px', margin: 'auto', padding: '0px 20px',textAlign: 'center'}}>
				{/* APLICAR PAGINADO? O HACERLO DE OTRO MODO? */}
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
			</Box>
		</>
	)
}

export default Category
