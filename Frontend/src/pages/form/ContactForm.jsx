import React from 'react'
import { useLocation } from 'react-router-dom'
import { Hero } from '../../components/hero/Hero'
import { dataImages } from '../../assets/images.json'
import { dataHero } from '../../assets/hero.json'
import CardContactForm from '../../components/cardContactForm/CardContactForm'

export const ContactForm = () => {
	const location = useLocation()
	const title = location.state?.title
	const id = location.state?.id

	return (
		<div>
			<Hero publi={dataHero[2]} imageBG={dataImages[4].url} />
			<CardContactForm title={title} id={id} />
		</div>
	)
}
