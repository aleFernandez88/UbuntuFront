import './login.css'
import LoginCard from '../components/LoginCard';
import loginLogo from '../assets/images/loginPage/Ubuntu Marcas-01.png'

function Login() {
    return (
        <>
            {/* <div className='navbar-login'>
                <img src={loginLogo}  alt='Logon Ubuntu Financiamiento Sostenible'></img>
            </div> */}
            <LoginCard />
        </>
    )
}

export default Login;