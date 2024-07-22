import { dataHero } from '../../assets/hero.json'
// import { dataEmprendimientos } from '../../assets/emprendimientos.json'
import { dataImages } from '../../assets/images.json'
import NavBarDrawer from '../../common/navBarDrawer/NavBarDrawer'
import Category from '../../common/category/Category'
import { Hero } from '../../components/hero/Hero'
// import { CardEntrepreneurship } from '../../components/cardEntrepreneurship/CardEntrepreneurship'
import { Box } from '@mui/material'

export const Undertakings = () => {
	return (
		<div>
			<NavBarDrawer />
			<Hero publi={dataHero[3]} imageBG={dataImages[5].url} />
			<Box
				sx={{
					backgroundImage: `url('${dataImages[3].bgVerde}')`,
					backgroundPosition: 'center center',
					backgroundSize: 'cover',
					padding: '0',
					paddingBottom: '30px',
				}}
			>
				<Category />
			</Box>
		</div>
	)
}
