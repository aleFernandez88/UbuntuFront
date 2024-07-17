
import { dataEmprendimientos } from '../../assets/emprendimientos.json'
import { dataImages } from '../../assets/images.json'
import NavBarDrawer from '../../common/navBarDrawer/NavBarDrawer'
import { CardPublication } from '../../components/cardPublication/CardPublication'
import SearchBar from '../../common/searchBar/SearchBar'
import { Typography } from '@mui/material'
import { CardEntrepreneurship } from '../../components/cardEntrepreneurship/CardEntrepreneurship'

export const Results = () => {
	return (
		<div>
			<NavBarDrawer/>
            <Typography sx={{margin:'20px'}}>
		 <SearchBar customStyles={{ backgroundColor: '#eaeaea' }}  /> 
         </Typography>
            <h3>
                <Typography variant='h3' sx={{textAlign:'center', fontSize:'24px', lineHeight:'30px', color:'black', margin:'20px'}}>Resultados de tu busqueda</Typography>
            </h3>
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
		</div>
	)
}
