import logoCard from '../assets/images/loginPage/logo card ingreso registro.png'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'

function LoginCard() {

    return (
        <Card sx={{width: 328, height: 352, borderRadius: 2}}> 
            
                <div>
                    <div>
                        <p>Ingreso Administrador</p>
                    </div>
                    <img src={logoCard} width='33' height='75' alt='Logo U Ingreso'></img>
                </div>
                <Button  sx={{borderRadius: 100, width: 200, height: 40, gap: 4}}> <p className='textButton'>Continuá con Google</p></Button>
            
        </Card>
    )
}

export default LoginCard;