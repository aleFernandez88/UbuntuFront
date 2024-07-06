import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import loginLogo from '../../assets/images/loginPage/Ubuntu Marcas-01.png'

function LoginNavbar () 
{

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        {/* <MenuIcon /> */}
                    </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default LoginNavbar;