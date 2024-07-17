import axios from 'axios';

const searchFunction = async () => {  
    try {  
       const response = await axios.get(`URL_DEL_ENDPOINT`, {  
          params: {  
             query: searchQuery  
          }  
       });  
 
      
       const data = response.data;  
 
       
    } catch (error) {  
       console.error('Error al buscar:', error);  
      
    }  
 }
 export default searchFunction