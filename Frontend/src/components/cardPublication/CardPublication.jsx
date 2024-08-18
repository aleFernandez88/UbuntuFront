import { useState, useEffect } from 'react'
import {
	Card,
	CardContent,
	Typography,
	Button,
	Collapse,
	Box,
} from '@mui/material'
import { Carousel } from '../carousel/Carousel'
import servicesAxios from '../../services/axios'

export const CardPublication = () => {
	const [publication, setPublication] = useState([])
	const [expanded, setExpanded] = useState(false)

	useEffect(() => {
		const fetchPublications = async () => {
			try {
				const response = await servicesAxios.getPublications()

				// Suponiendo que el array de publicaciones viene ordenado cronológicamente desde el backend
				setPublication(response)
			} catch (error) {
				console.log('Error al obtener las publicaciones:', error)
			}
		}

		fetchPublications()
	}, [])

	// Manejar el cambio de estado
	const handleExpandClick = () => {
		setExpanded(!expanded)
	}

	return (
		<>
			{publication.slice(0, 3).map((publi, index) => (
				<Card
					key={index}
					sx={{
						maxWidth: 345,
						margin: 'auto',
						mt: 3,
						bgcolor: 'greyLight.primary',
						borderRadius: '16px',
					}}
				>
					<CardContent>
						<Typography variant='h2' component='div' margin={'4px 0 16px 0'}>
							{publi.title}
						</Typography>
						<Carousel images={publi.images} />
						<Typography variant='h5' component='div' margin={'20px 0 4px 0'}>
							{publi.creationDate || 'Fecha no disponible'}
						</Typography>
						<Typography variant='body2' color='text.secondary' paragraph>
							{publi.description.split('\n')[0]}
						</Typography>
						<Collapse in={expanded} timeout='auto' unmountOnExit>
							{publi.description
								.split('\n')
								.slice(1)
								.map((paragraph, idx) => (
									<Typography
										key={idx}
										variant='body2'
										color='text.secondary'
										paragraph
									>
										{paragraph}
									</Typography>
								))}
						</Collapse>
						{publi.description.split('\n').length > 1 && (
							<Box sx={{ textAlign: 'center' }}>
								<Button
									size='small'
									onClick={handleExpandClick}
									color='primary'
									paddingTop='0px'
								>
									{expanded ? 'Ver menos' : 'Ver más'}
								</Button>
							</Box>
						)}
					</CardContent>
				</Card>
			))}
		</>
	)
}
