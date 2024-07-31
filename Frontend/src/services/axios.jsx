import { formControlClasses } from '@mui/material'
import axios from 'axios'

const servicesAxios = {
	category: async () => {
		try {
			// const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

			const response = await axios.get('http://localhost:8080/category')
			return response.data
		} catch (error) {
			console.log(error)
		}
	},

	undertakings: async id => {
		try {
			const response = await axios.get(
				`http://localhost:8080/microbusiness/category/${id}`
			)
			return response.data
		} catch (error) {
			console.log(error)
		}
	},

	sendContactForm: async formData => {
		try {
			const response = await axios.post(
				'http://localhost:8080/message',
				formData
			)
			return response.data
		} catch (error) {
			console.log('Contact form was not send:', error)
		}
	},
}

export default servicesAxios
