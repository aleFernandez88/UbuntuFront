import axios from "axios";  

/*const baseURL = "https://rickandmortyapi.com/api/character";  

export const fetchData = async (searchQuery) => {  
  try { 
  const response = await axios.get(`${baseURL}?name=${searchQuery}`);  
  const data = response.data.results.map((result) => ({
    title: result.name,
    description: result.gender,
    information: result.status,
    images: result.image,
    subtitle: result.species,
    category: result.status,
    ubi: result.name*/
   const baseURL = "http://localhost:8080/microbusiness";  

    export const fetchData = async (searchQuery) => {  
      try { 
      const response = await axios.get(`${baseURL}?name=${searchQuery}`);  
      console.log(response)
      const data = response.data.map((result) => ({
        title: result.name,
        description: result.description,
        information: result.more_information,
        images: result.images,
        subtitle: result.subtitle,
        category: result.sub_category,
        ubi: result.city 
  }));  
  return data;  
} catch (error) {  
  throw new Error('Error al buscar datos');  
}  
};