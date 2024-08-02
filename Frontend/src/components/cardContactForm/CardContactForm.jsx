import React, { useState } from 'react'

import {
	TextField,
	Button,
	Box,
	Typography,
	Container,
	Grid,
} from '@mui/material'
import servicesAxios from '../../services/axios'

const CardContactForm = ({ title, id, name, email, phone }) => {
	const [form, setForm] = useState({
		name: name,
		email: email,
		phone: phone,
		message: '',
		microBusiness: { id: id, name: title },
	})

	const [errors, setErrors] = useState({
		name: false,
		email: false,
		phone: false,
		message: false,
	})

	const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

	const validateEmail = email => emailRegExp.test(email)

	const phoneRegExp = /^\+\d{1,3}( 9)? \d{6,14}$/

	const validatePhone = phone => {
		return phoneRegExp.test(phone)
	}

	const handleChange = e => {
		const { name, value } = e.target
		setForm({
			...form,
			[name]: value,
		})
		if (name === 'phone') {
			setErrors({
				...errors,
				phone: !validatePhone(value),
			})
		}
		if (name === 'email') {
			setErrors({
				...errors,
				email: !validateEmail(value),
			})
		}
	}

	const handleSubmit = async e => {
		e.preventDefault()
		const newErrors = {
			name: form.name === '',
			email: form.email === '' || !validateEmail(form.email),
			phone: form.phone === '' || !validatePhone(form.phone),
			message: form.message === '',
		}

		setErrors(newErrors)

		const hasErrors = Object.values(newErrors).some(error => error)
		if (!hasErrors) {
			try {
				const formData = {
					fullName: form.name,
					email: form.email,
					phone: form.phone,
					message: form.message,
					microBusiness: {
						id: form.microBusiness.id,
						name: form.microBusiness.name,
					},
				}

				const response = await servicesAxios.sendContactForm(formData)
			} catch (error) {
				console.error('Contact form was not sent:', error)
			}
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
				<TextField
					name='id'
					value={form.microBusiness.id}
					sx={{ display: 'none' }}
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
					helperText={
						errors.email &&
						'Este campo es obligatorio. Formato: usuario@dominio.com'
					}
				/>
				<TextField
					label='Teléfono'
					name='phone'
					type='tel'
					value={form.phone}
					onChange={handleChange}
					error={errors.phone}
					helperText={
						errors.phone &&
						'Este campo es obligatorio. Formato: +54 9 123456789'
					}
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
