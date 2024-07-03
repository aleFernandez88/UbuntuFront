import { createTheme } from '@mui/material/styles'

let coloresUbuntu = {
	azul: '#093c59',
	negro: '#090909',
	verde: '#226516',
	exito: '#1d9129',
	warning: '#b86b11',
	error: '#bc1111',
	negro: '#090909',
	gris: '#d2d2d2',
	grisClaro: '#eaeaea',
	grisOscuro: '#060f70',
	blanco: '#fdfdfd',
}

export const theme = createTheme({
	typography: {
		// Fuente por defecto para toda la aplicación
		fontFamily: ['Lato', 'sans-serif'].join(','),
		// Estilo personalizado para los encabezados h1
		h1: {
			fontFamily: "'Lato', sans-serif",
			fontWeight: 700,
			fontSize: '3rem',
			lineHeight: 1.5,
			color: coloresUbuntu.negro,
		},
		// Estilo personalizado para los encabezados h2
		h2: {
			fontFamily: "'Lato', sans-serif",
			fontWeight: 600,
			fontSize: '18px',
			lineHeight: '25px',
			color: coloresUbuntu.negro,
			textAlign: 'center',
		},
		// Estilo personalizado para el texto principal
		body1: {
			fontFamily: "'Open Sans', sans-serif",
			fontWeight: 400,
			fontSize: '1rem',
			lineHeight: '20px',
			color: coloresUbuntu.negro,
		},
		// Estilo personalizado para los botones
		button: {
			fontFamily: "'Lato', sans-serif",
			fontWeight: 500,
			fontSize: '1rem',
			textTransform: 'capitalize',
			letterSpacing: '0.1em',
		},
	},
	palette: {
		mode: 'light',
		primary: {
			main: coloresUbuntu.azul,
		},
		secondary: {
			main: coloresUbuntu.verde,
		},
		success: {
			main: coloresUbuntu.exito,
		},
		warning: {
			main: coloresUbuntu.warning,
		},
		error: {
			main: coloresUbuntu.error,
		},
		text: {
			primary: coloresUbuntu.negro,
		},
		grisClaro: {
			primary: coloresUbuntu.grisClaro,
		},
		// background: {
		// 	default: coloresUbuntu.azul,
		// },
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
						backgroundColor: 'primary', // Color de fondo al pasar el ratón
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
