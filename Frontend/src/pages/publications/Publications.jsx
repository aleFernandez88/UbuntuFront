import { dataHero } from '../../assets/hero.json'
import { dataPublis } from '../../assets/publicaciones.json'
import { dataImages } from '../../assets/images.json'
import NavbarDrawer from '../../common/navbarDrawer/NavbarDrawer'
import { Hero } from '../../components/hero/Hero'
import { CardPublication } from '../../components/cardPublication/CardPublication'

export const Publications = () => {
	return (
		<div>
			<NavbarDrawer />
			<Hero publi={dataHero} imageBG={dataImages} />
			{dataPublis?.map((publi, index) => (
				<CardPublication
					id={index}
					title={publi.title}
					date={publi.date}
					content={publi.content}
				/>
			))}
		</div>
	)
}
