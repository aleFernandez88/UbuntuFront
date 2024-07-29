import React from 'react'
import NavBarDrawer from '../../common/navBarDrawer/NavBarDrawer'
import { Hero } from '../../components/hero/Hero'
import { dataImages } from '../../assets/images.json'
import { dataHero } from '../../assets/hero.json'
import CardContactForm from '../../components/cardContactForm/CardContactForm'

export const ContactForm = () => {
	return (
		<div>
			<Hero publi={dataHero[2]} imageBG={dataImages[4].url} />
			<CardContactForm />
		</div>
	)
}
