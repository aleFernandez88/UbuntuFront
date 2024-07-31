import React from 'react'
import { useLocation } from 'react-router-dom'
import NavBarDrawer from '../../common/navBarDrawer/NavBarDrawer'
import { Hero } from '../../components/hero/Hero'
import { dataImages } from '../../assets/images.json'
import { dataHero } from '../../assets/hero.json'
import CardContactForm from '../../components/cardContactForm/CardContactForm'

export const ContactForm = () => {
	const location = useLocation()
	const title = location.state?.title
	return (
		<div>
			<Hero publi={dataHero[2]} imageBG={dataImages[4].url} />
			<CardContactForm title={title} />
		</div>
	)
}
