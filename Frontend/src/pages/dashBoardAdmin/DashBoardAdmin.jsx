import { Box, Typography } from '@mui/material'
import React from 'react'

export const DashBoardAdmin = () => {
	return (
		<>
			<Box sx={{ textAlignLast: 'center' }}>
				<Typography variant='h3' sx={{ mt: 8, mb: 4, color: '#090909' }}>
					Dashboard Administrador
				</Typography>
				<Typography variant='h5' sx={{ mt: 4, fontSize: '16px' }}>
					Estadisticas mesuales
				</Typography>
			</Box>
		</>
	)
}
