import axios from 'axios'
import { URL_CATEGORY } from '../envs/Enviroments'

const CategoryService = {
	getAllCategory: async () => {
		try {
			const response = await axios.get(URL_CATEGORY)
			return response.data
		} catch (error) {
			console.error('Error fetching categories:', error)
			throw error // Re-lanzar el error para que pueda ser capturado por el componente
		}
	},
}

export default CategoryService
