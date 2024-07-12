import { Box, Container, Typography } from '@mui/material'
import SearchBar from '../../common/searchbar/Searchbar'

export const Hero = ({ imageBG, publi }) => {
	return (
		<div>
			<Container
				sx={{
					height: '488px',
					backgroundImage: `url('${imageBG[0].url}')`,
					backgroundPosition: 'center center',
					backgroundSize: 'cover',
					padding: '0',
				}}
			>
				<Box
					bgcolor={'#000000d6'}
					height={'488px'}
					width={'100%'}
					display={'flex'}
					alignItems={'space-araound'}
					justifyContent={'space-around'}
					flexDirection={'column'}
				>
					<SearchBar />
					<Box padding={'20px 20px 50px 20px'} width={'65%'}>
						<Typography variant='h1' color={'#fdfdfd'}>
							{publi.subTitle}
						</Typography>
						<Typography variant='p' color={'#fdfdfd'} lineHeight={'32px'}>
							{publi.title}
						</Typography>
						<Typography variant='h2' color={'#fdfdfd'} lineHeight={'32px'}>
							{publi.content}
						</Typography>
					</Box>
				</Box>
			</Container>
		</div>
	)
}
