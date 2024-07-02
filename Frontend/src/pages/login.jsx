import './login.css'
import LoginCard from '../components/LoginCard';
import loginLogo from '../assets/images/loginPage/Ubuntu Marcas-01.png'

function Login() {
    return (
        <>
            <div className='navbar-login'>
                <img src={loginLogo} width='120' height='56' alt='Logon Ubuntu Financiamiento Sostenible'></img>
            </div>
            <div className='card-login'>
                <LoginCard />
            </div>
        </>
    )
}

export default Login;