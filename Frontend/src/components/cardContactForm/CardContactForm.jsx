import React, { useState } from 'react'
import {
	TextField,
	Button,
	Box,
	Typography,
	Container,
	Grid,
} from '@mui/material'

const CardContactForm = ({ title }) => {
	const [form, setForm] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
		title: title,
	})

	const [errors, setErrors] = useState({
		name: false,
		email: false,
		phone: false,
		message: false,
	})

	const handleChange = e => {
		const { name, value } = e.target
		setForm({
			...form,
			[name]: value,
		})
	}

	const handleSubmit = e => {
		e.preventDefault()
		const newErrors = {
			name: form.name === '',
			email: form.email === '',
			phone: form.phone === '',
			message: form.message === '',
		}

		setErrors(newErrors)

		const hasErrors = Object.values(newErrors).some(error => error)
		if (!hasErrors) {
			console.log('Formulario enviado:', form)
		}
	}

	const isFormValid = () => {
		return (
			form.name.trim().length > 0 &&
			form.email.trim().length > 0 &&
			form.phone.trim().length > 0 &&
			form.message.trim().length > 0
		)
	}

	return (
		<Container sx={{ marginTop: '23px', marginBottom: '20px' }}>
			<Typography
				sx={{
					fontFamily: 'Lato',
					textAlign: 'center',
					fontSize: '22px',
					fontWeight: 500,
					lineHeight: '30px',
					marginBottom: '20px',
				}}
			>
				Por favor, completá el formulario. Nos comunicaremos en breve.
			</Typography>
			<Typography
				sx={{
					fontFamily: 'Lato',
					textAlign: 'center',
					fontSize: '20px',
					fontWeight: 600,
					lineHeight: '25px',
					color: ' #093C59',
					marginBottom: '20px',
				}}
			>
				{title}
			</Typography>
			<Typography
				sx={{
					fontFamily: 'Lato',
					textAlign: 'center',
					fontSize: '16px',
					fontWeight: 400,
					lineHeight: '25px',
					color: ' #090909',
					marginBottom: '20px',
				}}
			>
				Vas a contactar a Ubuntu para recibir más información acerca del
				Microemprendimiento seleccionado.
			</Typography>

			<Box
				component='form'
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: 2,
					maxWidth: '400px',
					margin: '0 auto',
				}}
				onSubmit={handleSubmit}
			>
				<Typography
					value={form.title}
					sx={{
						fontFamily: 'Lato',
						textAlign: 'center',
						fontSize: '20px',
						fontWeight: 600,
						lineHeight: '25px',
						color: ' #093C59',
						marginBottom: '20px',
					}}
				></Typography>
				<TextField
					name='title'
					value={form.title}
					sx={{ display: 'none' }} // Ocultar el campo
				/>
				<TextField
					label='Apellido y Nombre'
					name='name'
					value={form.name}
					onChange={handleChange}
					error={errors.name}
					helperText={errors.name && 'Este campo es obligatorio'}
				/>
				<TextField
					label='Correo Electrónico'
					name='email'
					type='email'
					value={form.email}
					onChange={handleChange}
					error={errors.email}
					helperText={errors.email && 'Este campo es obligatorio'}
				/>
				<TextField
					label='Teléfono'
					name='phone'
					type='tel'
					value={form.phone}
					onChange={handleChange}
					error={errors.phone}
					helperText={errors.phone && 'Este campo es obligatorio'}
				/>
				<TextField
					label='Mensaje'
					name='message'
					value={form.message}
					onChange={handleChange}
					error={errors.message}
					helperText={errors.message && 'Este campo es obligatorio'}
					inputProps={{ maxLength: 300 }}
					multiline
					rows={5}
					sx={{ marginBottom: '-10px' }}
				/>
				<Grid
					container
					justifyContent='space-between'
					alignItems='center'
					sx={{ padding: '0 10px' }}
				>
					<Typography variant='body2' color='textSecondary'>
						Máximo 300 caracteres
					</Typography>
					<Typography variant='body2' color='textSecondary'>
						{`${form.message.length}/300`}
					</Typography>
				</Grid>
				<Button
					size='large'
					variant='contained'
					color={isFormValid() ? 'primary' : 'secondary'}
					type='submit'
					sx={{ borderRadius: '100px', marginTop: '30px' }}
				>
					Enviar
				</Button>
			</Box>
		</Container>
	)
}

export default CardContactForm
