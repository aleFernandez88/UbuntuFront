import axios from 'axios'
import { URL_CATEGORY, URL_GOOGLE } from '../envs/Enviroments'

const LoginService = {
	loginGoogle: async googleData => {
		try {
			console.log('Google Data:', googleData)
			const res = await axios.post(
				URL_GOOGLE,
				{
					code: googleData.code,
				},
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)

			const data = res.data
			console.log(data)
		} catch (error) {
			console.error('Login Failed:', error.response || error)
		}
	},
}

export default LoginService
