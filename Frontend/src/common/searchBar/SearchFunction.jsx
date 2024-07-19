import axios from "axios";  

const baseURL = "https://rickandmortyapi.com/api/character";  

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
    ubi: result.name
   /* const baseURL = "https://localhost:8080/micorbusiness";  

    export const fetchData = async (searchQuery) => {  
      try { 
      const response = await axios.get(`${baseURL}?name=${searchQuery}`);  
      const data = response.data.results.map((result) => ({
        title: result.title,
        description: result.description,
        information: result.information,
        images: result.image,
        subtitle: result.subtitle,
        category: result.category,
        ubi: result.ubi */
  }));  
  return data;  
} catch (error) {  
  throw new Error('Error al buscar datos');  
}  
};