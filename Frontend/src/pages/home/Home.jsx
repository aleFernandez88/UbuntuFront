import React, { useState } from 'react'
import NavBarDrawer from '../../common/navBarDrawer/NavBarDrawer'
import { Hero } from '../../components/hero/Hero'
import Objetives from '../../components/objetives/Objetives'
import { dataImages } from '../../assets/images.json'
import { dataHero } from '../../assets/hero.json'
import { dataPublis } from '../../assets/publicaciones.json'
import { CardPublication } from '../../components/cardPublication/CardPublication'
import Category from '../../common/category/Category'
import { Box, Button, Typography } from '@mui/material'
import { Link } from '@mui/material'
import { SwitchNavBar } from '../../common/switchNavBar/SwitchNavBar'
import { ModalGeneric } from '../../components/modalGeneric/ModalGeneric'

export const Home = () => {
	const [showAll, setShowAll] = useState(false)

	const handleShowAllClick = () => {
		setShowAll(true)
	}
	return (
		<>
			<Hero publi={dataHero[1]} imageBG={dataImages[1].url} />
			<Objetives />
			<Box sx={{ textAlignLast: 'center' }}>
				<Typography variant='h5' sx={{ mt: 4, fontSize: '16px' }}>
					Microemprendimientos Ubuntu
				</Typography>
				<Typography variant='h3' sx={{ mb: 4, color: '#090909' }}>
					Categorías
				</Typography>
			</Box>
			<Category cant={4} />
			<Box
				sx={{
					minWidth: '280px',
					maxWidth: '500px',
					margin: 'auto',
					padding: '0px 20px',
					textAlign: 'center',
				}}
			>
				<Link underline='none' href={'/emprendimientos'}>
					<Button
						variant='contained'
						sx={{ borderRadius: '20px', mt: '10px', minWidth: '184px' }}
					>
						<Typography variant='button' sx={{ letterSpacing: '0px' }}>
							Ver más Categorías
						</Typography>
					</Button>
				</Link>
			</Box>
			<Typography
				variant='h5'
				color='text.primary'
				textAlign='center'
				marginTop='40px'
			>
				Publicaciones
			</Typography>
			<Typography
				variant='h2'
				color='text.primary'
				textAlign='center'
				marginTop='5px'
			>
				Finanzas con impacto
			</Typography>
			{dataPublis
				.slice(0, showAll ? dataPublis.length : 3)
				.map((publi, index) => (
					<CardPublication
						key={index}
						images={publi.images}
						title={publi.title}
						date={publi.date}
						content={publi.content}
					/>
				))}
			<Box sx={{ textAlign: 'center' }}>
				<Button
					variant='contained'
					sx={{ borderRadius: '20px', mt: '20px', mb: '10px' }}
					onClick={handleShowAllClick}
				>
					<Typography variant='button'>Ir a Publicaciones</Typography>
				</Button>
			</Box>
		</>
	)
}
