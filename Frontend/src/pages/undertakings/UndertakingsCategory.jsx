import { dataHero } from '../../assets/hero.json'
import { dataEmprendimientos } from '../../assets/emprendimientos.json'
import { dataImages } from '../../assets/images.json'
import NavBarDrawer from '../../common/navBarDrawer/NavBarDrawer'
import { Hero } from '../../components/hero/Hero'
import { CardEntrepreneurship } from '../../components/cardEntrepreneurship/CardEntrepreneurship'
import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import servicesAxios from '../../services/axios'

export const UndertakingsCategory = () => {
	const { id } = useParams() ;
	const [datos, setDatos] = useState("");
	const [error, setError] = useState("");

	useEffect(() => {
		
		const undertakings = async() => {
			try {
				//AUN NO FUNCIONA EL DE MICROEMPRENDIMIENTOS, NO HAY DATOS
				const response = await servicesAxios.undertakings();
				console.log(response);
				setDatos(response);
			} catch (error) {
				setError(error);
			}
		}

		undertakings();
		
	},[]);

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
				<Box>
					<Typography>{id}</Typography>
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
						/* 	deleted
							city
							contact_messages
							description
							images
							managing
							more_information
							name
							category_id
							country_id
							province_id */
					/>
					))}
				</Box>	
			</Box>
		</div>
	)
}
