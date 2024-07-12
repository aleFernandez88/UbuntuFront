import React from 'react'
import NavBarDrawer from '../../common/navBarDrawer/NavbarDrawer'
import { Hero } from '../../components/hero/Hero'
import Objetives from '../../components/objetives/Objetives'
import { dataImages } from '../../assets/images.json'
import { dataHero } from '../../assets/hero.json'

export const Home = () => {
	return (
		<>
			<NavBarDrawer />
			<Hero publi={dataHero[1]} imageBG={dataImages} />
			<Objetives />
		</>
	)
}
