import React from 'react'
import NavBarDrawer from '../../common/navBarDrawer/NavbarDrawer'
import { Hero } from '../../components/hero/Hero'
import Objetives from '../../components/objetives/Objetives'
import { dataImages } from '../../assets/images.json'
import { dataHero } from '../../assets/hero.json'
import { dataPublis } from '../../assets/publicaciones.json'
import { CardPublication } from '../../components/cardPublication/CardPublication'
import Category from '../../common/category/Category'
import { Typography } from '@mui/material'

export const Home = () => {
	return (
		<>
			<NavBarDrawer />
			<Hero publi={dataHero[1]} imageBG={dataImages} />
			<Objetives />
			<Category />
			<Typography
				variant='h5'
				color='text.primary'
				textAlign='center'
				marginTop='30px'
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
			{dataPublis?.map((publi, index) => (
				<CardPublication
					id={index}
					images={publi.images}
					title={publi.title}
					date={publi.date}
					content={publi.content}
				/>
			))}
		</>
	)
}
