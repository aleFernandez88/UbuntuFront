import './login.css'
import LoginCard from '../../components/loginCard/LoginCard'
import { Box } from '@mui/material'
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
