import React from 'react'
import { Publications } from '../pages/publications/Publications'
import { Home } from '../pages/home/Home'
import { useRoutes } from 'react-router-dom'
import { Undertakings } from '../pages/undertakings/Undertakings'
import { UndertakingsCategory } from '../pages/undertakings/UndertakingsCategory'
import Login from '../pages/login/Login'
import UserAutenthicated from '../pages/testUserAuthenticated/TestUserAuthenticated'

export const AppRoutes = () => {
	const routes = [
		{
			path: '/',
			element: <Home />,
		},
		{
			path: '/login',
			element: <Login />,
		},
		{
			path: '/publicaciones',
			element: <Publications />,
		},
		{
			path: '/emprendimientos',
			element: <Undertakings />,
		},
		{
			path: '/categoriaSeleccionada',
			element: <UndertakingsCategory/>, 
		},

		{
			path: '/userAuthenticated',
			element: <UserAutenthicated/>, 
		}
	]

	return useRoutes(routes)
}
