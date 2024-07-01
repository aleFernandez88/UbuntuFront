import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
	typography: {
		fontFamily: ['Lato', 'sans-serif'].join(','),
	},
	palette: {
		mode: 'light',
		primary: {
			main: '#093c59',
		},
		secondary: {
			main: '#226516',
		},
		success: {
			main: '#1d9129',
		},
		warning: {
			main: '#b86b11',
		},
		error: {
			main: '#bc1111',
		},
		text: {
			primary: '#090909',
		},
		background: {
			default: '#fdfdfd',
		},
	},
	components: {
		// Name of the component
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: '8px', // Bordes redondeados
					textTransform: 'none', // Mantener texto en el caso original
				},
				containedPrimary: {
					backgroundColor: 'primary',
					color: 'text',
					'&:hover': {
						backgroundColor: 'success', // Color de fondo al pasar el ratón
					},
				},
				containedSecondary: {
					backgroundColor: '#6C757D',
					color: '#FFFFFF',
					'&:hover': {
						backgroundColor: '#5a6268', // Color de fondo al pasar el ratón
					},
				},
				sizeSmall: {
					padding: '6px 12px',
					fontSize: '0.875rem',
				},
				sizeLarge: {
					padding: '10px 20px',
					fontSize: '1.125rem',
				},
			},
		},
	},
})
