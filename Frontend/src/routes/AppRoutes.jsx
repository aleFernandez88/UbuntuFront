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
import { DashBoardAdmin } from '../pages/dashBoardAdmin/DashBoardAdmin'
import { Layout } from '../components/layout/Layout'
import { CreateFormu } from '../pages/microbusinessForm/MicroBusinessFormPost'

import { MicroemprendimientoDetail } from '../pages/microbusinessForm/MicroBusinessFormGet'

import ContactRequest from '../pages/contactRequest/ContactRequest'
import ContactSelected from '../pages/contactRequest/ContactSelected'
import { EditMicroemprendimiento } from '../pages/microbusinessForm/MicroBusinessFormPut'
import { UndertakingsAdmin } from '../pages/undertakings/UndertakingsAdmin'

export const AppRoutes = () => {
	const routes = [
		{
			element: <Layout />,
			children: [
				{
					path: '/',
					element: <Home />,
				},

				{
					path: '/publicaciones',
					element: <Publications />,
				},
				{
					path: '/microemprendimientos',
					element: <Undertakings />,
				},
				{
					path: '/microemprendimientosA',
					element: <UndertakingsAdmin />,
				},
				{
					path: '/categoriaSeleccionada/:id',
					element: <UndertakingsCategory />,
				},
				{
					path: '/contacto',
					element: <ContactForm />,
				},
				{
					path: '/resultados',
					element: <Results />,
				},

				{
					path: '/sinresultados',
					element: <Noresults />,
				},
				{
					path: '/dashboard',
					element: <DashBoardAdmin />,
				},
			
				{
					path: '/microcrear',
					element: <CreateFormu />,
				},
			
				{
					path: '/microeditar/:id',
					element: <EditMicroemprendimiento />,
				},
				{
					path: '/microver/:id',
					element: <MicroemprendimientoDetail />,
				},
				{
					path: '/solicitudContacto',
					element: <ContactRequest />,
				},
				{
					path: '/contactoSeleccionado',
					element: <ContactSelected />,
				},
			],
		},
		{
			path: '/login',
			element: <Login />,
		},

		
	]

	return useRoutes(routes)
}
