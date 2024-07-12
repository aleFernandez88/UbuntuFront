import LoginCard from '../../components/loginCard/LoginCard'
import { Box } from '@mui/material'

import { dataImages } from '../../assets/images.json'
import NavBarDrawer from '../../common/navBarDrawer/NavBarDrawer'

function Login() {
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					minHeight: '100vh',
					justifyContent: 'space-between',
					backgroundImage: `url('${dataImages[2].url}')`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<NavBarDrawer />
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						flexGrow: 1,
					}}
				>
					<LoginCard />
				</Box>
			</Box>
		</>
	)
}

export default Login
