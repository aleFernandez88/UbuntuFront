import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'

export default function App() {
	return (
		<>
			{/* <NavigationDrawer />
		<CuadroDeObjetivos /> */}
			{/* <Publications /> */}
			<main>
				<BrowserRouter>
					<AppRoutes />
				</BrowserRouter>
			</main>
		</>
	)
}
