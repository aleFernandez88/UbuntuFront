import axios from 'axios';
import apiClient from './apiClient';

const servicesAxios = {
	category: async () => {
		try {
			// const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

			const response = await apiClient.get('/category')
			return response.data
		} catch (error) {
			console.log(error)
		}
	},

	undertakings: async id => {
		try {
			const response = await apiClient.get(
				`/microbusiness/category/${id}`
			)
			return response.data
		} catch (error) {
			console.log(error)
		}
	},

	undertakingsAll: async() => {
		try {
			const response = await apiClient.get(`/microbusiness`)
			return response.data;
		} catch (error) {
			console.log(error)
		}
	},

	sendContactForm: async formData => {
		try {
			const response = await apiClient.post(
				`/message`,
				formData
			)
			return response.data
		} catch (error) {
			console.log(error)
		}
	},

	message: async () => {
		try {
			const response = await apiClient.get(`/message`);
			return response.data
		} catch (error) {
			console.log(error)
		}
	},

	messageId: async id => {
		try {
			const response = await apiClient.get(`/message/${id}`)
			return response.data
		} catch (error) {
			console.log(error)
		}
	},

	messageUpdate: async (id, datos) => {
		try {
			const response = await apiClient.put(
				`/message/${id}`,
				datos
			)
			return response.data
		} catch (error) {
			console.log(error)
		}
	},
}

export default servicesAxios
