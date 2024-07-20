import React from 'react'
import logoCard from '../../assets/images/loginPage/logo card ingreso registro.png'
import logoButton from '../../assets/images/loginPage/google-logo.png'
import Card from '@mui/material/Card'
import { Box, Typography, Button } from '@mui/material'
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'

function LoginCardComponent() {
	const login = useGoogleLogin({
		onSuccess: async googleData => {
			try {
				console.log('Google Data:', googleData)
				const res = await axios.post(
					'TU_ENDPOINT_DE_BACKEND',
					{
						token: googleData.credential,
					},
					{
						headers: {
							'Content-Type': 'application/json',
						},
					}
				)

				const data = res.data
				console.log(data)
			} catch (error) {
				console.error('Login Failed:', error.response || error)
			}
		},
		onError: error => {
			console.error('Login Failure:', error)
		},
	})

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
					variant='p'
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
				<img src={logoCard} width='33' height='75' alt='Logo U Ingreso'></img>
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
				<img
					src={logoButton}
					width='24px'
					height='24px'
					alt='Google logo'
				></img>
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
		</Card>
	)
}

function LoginCard() {
	return (
		<GoogleOAuthProvider clientId='524777067522-bbtqsdcvsrhislfa820o81b8crn6opnu.apps.googleusercontent.com'>
			<LoginCardComponent />
		</GoogleOAuthProvider>
	)
}

export default LoginCard
