import { useState } from 'react'
import {
	Card,
	CardContent,
	Typography,
	Button,
	Collapse,
	Box,
} from '@mui/material'
import { Carousel } from '../carousel/Carousel'

export const CardPublication = ({ title, images, date, content }) => {
	// Controlar la expansión del contenido
	const [expanded, setExpanded] = useState(false)

	// Manejar el cambio de estado
	const handleExpandClick = () => {
		setExpanded(!expanded)
	}

	return (
		<Card
			sx={{
				maxWidth: 345,
				margin: 'auto',
				mt: 5,
				bgcolor: 'greyLight.primary',
				borderRadius: '16px',
			}}
		>
			<CardContent>
				<Typography variant='h2' component='div' margin={'4px 0 16px 0'}>
					{title}
				</Typography>
				<Carousel images={images} />
				<Typography variant='h5' component='div' margin={'20px 0 4px 0'}>
					{date}
				</Typography>
				<Typography variant='body2' color='text.secondary' paragraph>
					{content.length > 0 && content[0]}
				</Typography>
				<Collapse in={expanded} timeout='auto' unmountOnExit>
					{content.slice(1).map((paragraph, index) => (
						<Typography
							key={index}
							variant='body2'
							color='text.secondary'
							paragraph
						>
							{paragraph}
						</Typography>
					))}
				</Collapse>
				{content.length > 1 && (
					<Box sx={{ textAlign: 'center' }}>
						<Button
							size='small'
							onClick={handleExpandClick}
							color='primary'
							paddingTop='0px'
						>
							{/* Cambiar el texto del botón según el estado */}
							{expanded ? 'Ver menos' : 'Ver más'}
						</Button>
					</Box>
				)}
			</CardContent>
			{/* No necesitamos Collapse aquí ya que no hay contenido adicional aparte del texto */}
		</Card>
	)
}
