import './login.css'
import LoginCard from '../../components/loginCard/LoginCard';
import { Box } from '@mui/material';
import NavigationDrawer from '../../common/navbar-drawer';

function Login() {
    return (
        <>
        <Box sx={{ 
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'space-between',
            }}>
                <NavigationDrawer />
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1
                }}>
                    <LoginCard />
                </Box>
        </Box>
        </>
    )
}

export default Login;