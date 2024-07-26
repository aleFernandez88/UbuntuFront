import React from 'react'
import { Publications } from '../pages/publications/Publications'
import { Home } from '../pages/home/Home'
import { useRoutes } from 'react-router-dom'
import { Undertakings } from '../pages/undertakings/Undertakings'
import { UndertakingsCategory } from '../pages/undertakings/UndertakingsCategory'
import Login from '../pages/login/Login'
import { Results } from '../pages/results/Results'
import { Noresults } from '../pages/results/Noresults'



import { ContactForm } from '../pages/form/ContactForm'

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
			path: '/categoriaSeleccionada/:id',
			element: <UndertakingsCategory />,
		},
		{
			path: '/formulariodeContacto',
			element: <ContactForm />,
		},
	]
 const AppRoutes = () => {
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
            path: '/resultados',
            element: <Results />,
        },

        {
            path: '/sinresultados',
            element: <Noresults />,
        },
    ]

        return useRoutes(routes)
}
export default AppRoutes;