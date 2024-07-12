import { dataHero } from '../../assets/hero.json'
import { dataPublis } from '../../assets/publicaciones.json'
import { dataImages } from '../../assets/images.json'
import NavBarDrawer from '../../common/navBarDrawer/NavbarDrawer'
import { Hero } from '../../components/hero/Hero'
import { CardPublication } from '../../components/cardPublication/CardPublication'

export const Publications = () => {
	return (
		<div>
			<NavBarDrawer />
			<Hero publi={dataHero[0]} imageBG={dataImages} />
			{dataPublis?.map((publi, index) => (
				<CardPublication
					id={index}
					title={publi.title}
					images={publi.images}
					date={publi.date}
					content={publi.content}
				/>
			))}
		</div>
	)
}
