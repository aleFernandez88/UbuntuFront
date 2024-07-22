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
			<Hero publi={dataHero[0]} imageBG={dataImages} />
			<Box
				sx={{
					backgroundImage: `url('${dataImages[3].bgVerde}')`,
					backgroundPosition: 'center center',
					backgroundSize: 'cover',
					paddingTop: '20px',
					paddingBottom: '20px',
				}}
			>
				<Category />
			</Box>
		</div>
	)
}
