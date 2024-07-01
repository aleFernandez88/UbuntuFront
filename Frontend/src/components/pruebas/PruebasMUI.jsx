import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

export const PruebasMUI = () => {
	return (
		<Container>
			<Box>
				<Typography variant='h1'>Probando MUI</Typography>
				<Button variant='contained' color='primary' size='small'>
					Botón
				</Button>
			</Box>
		</Container>
	)
}
