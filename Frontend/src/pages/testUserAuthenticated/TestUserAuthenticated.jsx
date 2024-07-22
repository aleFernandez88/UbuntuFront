import UserAvatar from "../../components/userAuthenticated/UserAuthenticated";
import NavBarDrawer from "../../common/navBarDrawer/NavBarDrawer";


// Ejemplo de uso  
const UserAutheticated = () => {  
    const userName = "Adrián Díaz";  
    const initials = userName.split(' ').map(name => name.charAt(0)).join('').toUpperCase();  
  
    const handleLogout = () => {  
      
      console.log("Sesión cerrada");  
    };  
  
    return (  
      <div>  
        <NavBarDrawer   
          showUserAvatar={true}   
          userAvatar={<UserAvatar initials={initials} onLogout={handleLogout} />}   
        />  
      </div>  
    );  
  };  
  
  export default UserAutheticated