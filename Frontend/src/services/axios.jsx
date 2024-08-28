import axios from 'axios'
import apiClient from './apiClient'

const servicesAxios = {
	category: async () => {
		try {
			// const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

			const response = await apiClient.get('http://localhost:8080/category')
			return response.data
		} catch (error) {
			console.log(error)
		}
	},

	undertakings: async id => {
		try {
			const response = await apiClient.get(
				`http://localhost:8080/microbusiness/category/${id}`
			)
			return response.data
		} catch (error) {
			console.log(error)
		}
	},

	undertakingsAll: async () => {
		try {
			const response = await apiClient.get(
				`http://localhost:8080/microbusiness`
			)
			return response.data
		} catch (error) {
			console.log(error)
		}
	},

	sendContactForm: async formData => {
		try {
			const response = await apiClient.post(
				`http://localhost:8080/message`,
				formData
			)
			return response.data
		} catch (error) {
			console.log(error)
		}
	},

	message: async () => {
		try {
			const response = await apiClient.get(`http://localhost:8080/message`)
			return response.data
		} catch (error) {
			console.log(error)
		}
	},

	messageId: async id => {
		try {
			const response = await apiClient.get(
				`http://localhost:8080/message/${id}`
			)
			return response.data
		} catch (error) {
			console.log(error)
		}
	},

	messageUpdate: async (id, datos) => {
		try {
			const response = await apiClient.put(
				`http://localhost:8080/message/${id}`,
				datos
			)
			return response.data
		} catch (error) {
			console.log(error)
		}
	},

	getPublications: async () => {
		try {
			const response = await apiClient.get(`/publication/last`)
			return response.data
		} catch (error) {
			console.log(error)
		}
	},

	increaseViews: async id => {
		try {
			const response = await apiClient.patch(`/publication/${id}/views`)
			return response.data
		} catch (error) {
			console.log(error)
		}
	},
}

export default servicesAxios
