import { dataHero } from '../../assets/hero.json'
import { dataEmprendimientos } from '../../assets/emprendimientos.json'
import { dataImages } from '../../assets/images.json'
import NavBarDrawer from '../../common/navBarDrawer/NavBarDrawer'
import { Hero } from '../../components/hero/Hero'
import { CardEntrepreneurship } from '../../components/cardEntrepreneurship/CardEntrepreneurship'
import { Box } from '@mui/material'

export const UndertakingsCategory = () => {
	return (
		<div>
			<NavBarDrawer />
			<Hero publi={dataHero[0]} imageBG={dataImages} />
			<Box
				sx={{
					backgroundImage: `url('${dataImages[3].bgVerde}')`,
					backgroundPosition: 'center center',
					backgroundSize: 'cover',
					padding: '0',
					paddingBottom: '30px',
				}}
			>
				<Box>
					{dataEmprendimientos?.map((emp, index) => (
						<CardEntrepreneurship
							id={index}
							title={emp.title}
							images={emp.images}
							subtitle={emp.subtitle}
							category={emp.category}
							ubi={emp.ubi}
							description={emp.description}
							information={emp.information}
						/>
					))}
				</Box>
			</Box>
		</div>
	)
}
