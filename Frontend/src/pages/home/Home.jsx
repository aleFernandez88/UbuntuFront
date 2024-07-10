import React from 'react'
import NavBarDrawer from '../../common/navBarDrawer/NavBarDrawer'
import { Hero } from '../../components/hero/Hero'
import Objetives from '../../components/objetives/Objetives'
import { dataImages } from '../../assets/images.json'
import { dataPublis } from '../../assets/publicaciones.json'

export const Home = () => {
	return (
		<>
			<NavBarDrawer />
			<Hero publi={dataPublis} imageBG={dataImages} />
			<Objetives />
		</>
	)
}
