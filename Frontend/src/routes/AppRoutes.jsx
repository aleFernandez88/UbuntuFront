import React from 'react'
import { Publications } from '../pages/publications/Publications'
import { Home } from '../pages/home/Home'
import { useRoutes } from 'react-router-dom'

export const AppRoutes = () => {
	const routes = [
		{
			path: '/',
			element: <Home />,
		},
		{
			path: '/publicaciones',
			element: <Publications />,
		},
		{
			path: '/emprendimientos',
		},
	]

	return useRoutes(routes)
}
