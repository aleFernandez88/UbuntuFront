import React from 'react'
import logoCard from '../../assets/images/loginPage/logo card ingreso registro.png'
import logoButton from '../../assets/images/loginPage/google-logo.png'
import Card from '@mui/material/Card'
import { Box, Typography, Button } from '@mui/material'
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google'
import LoginService from '../../services/LoginService'
import CategoryService from '../../services/CategoryService'

function LoginCardComponent() {
	const login = useGoogleLogin({
		flow: 'auth-code',
		onSuccess: async googleData => {
			try {
				await LoginService.loginGoogle(googleData)
			} catch (error) {
				console.error('Login Failure:', error)
			}
		},
		onError: error => {
			console.error('Login Failure:', error)
		},
	})

	const testCategory = async () => {
		try {
			const data = await CategoryService.getAllCategory()
			console.log('SOY CATEGORIA:', data)
		} catch (error) {
			console.error('Category Failure:', error)
		}
	}

	return (
		<Card
			sx={{
				height: 352,
				margin: '0 16px',
				borderRadius: 2,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'start',
				flexDirection: 'column',
				paddingTop: '20px',
			}}
		>
			<Box display='block' textAlign='center' mb='10px'>
				<Typography
					variant='h6'
					sx={{
						mt: 2,
						display: 'block',
						textAlign: 'center',
						lineHeight: '32px',
						fontWeight: 700,
						mb: '23px',
					}}
				>
					Ingreso <br />
					Administrador
				</Typography>
				<img src={logoCard} width='33' height='75' alt='Logo U Ingreso' />
			</Box>
			<Button
				variant='contained'
				onClick={() => login()}
				sx={{
					mt: '60px',
					borderRadius: '100px',
					width: '200px',
					height: '40px',
					gap: '4px',
				}}
			>
				<img src={logoButton} width='24px' height='24px' alt='Google logo' />
				<Typography
					variant='button'
					sx={{
						fontSize: '14px',
						lineHeight: '30px',
						width: '150px',
						height: '30px',
						letterSpacing: '0',
						textTransform: 'inherit',
					}}
				>
					Continuá con Google
				</Typography>
			</Button>
			<Button
				variant='contained'
				onClick={testCategory}
				sx={{
					mt: '20px',
					borderRadius: '100px',
					width: '200px',
					height: '40px',
					gap: '4px',
				}}
			>
				Test Category
			</Button>
		</Card>
	)
}

function LoginCard() {
	return (
		<GoogleOAuthProvider clientId='842850903587-amnr9sepa7h13hq1c4r2q4f93h661295.apps.googleusercontent.com'>
			<LoginCardComponent />
		</GoogleOAuthProvider>
	)
}

export default LoginCard
