import './login.css'
import LoginCard from '../../components/loginCard/LoginCard';
import LoginNavbar from '../../components/loginCard/LoginNavbar';
import { Box } from '@mui/material';

function Login() {
    return (
        <>
        <Box sx={{ 
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'space-between',
            }}>
                <LoginNavbar/>
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