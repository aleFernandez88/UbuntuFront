// src/api/apiClient.js
import axios from 'axios';

// Crear una instancia de Axios
const apiClient = axios.create({
  baseURL: 'https://api.example.com', // Reemplaza con tu URL base
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para añadir el token a cada solicitud
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
    })