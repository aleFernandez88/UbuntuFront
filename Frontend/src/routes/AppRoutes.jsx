import React from 'react'
import { Publications } from '../pages/publications/Publications'
import { Home } from '../pages/home/Home'
import { useRoutes } from 'react-router-dom'
import Login from '../pages/login/Login'
import { Undertakings } from '../pages/undertakings/Undertakings'

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
	]

	return useRoutes(routes)
}
