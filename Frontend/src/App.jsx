import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes} from './routes/AppRoutes'

export default function App() {
	return (
		<>
			<main>
				<BrowserRouter>
					<AppRoutes />
				</BrowserRouter>
			</main>
		</>
	)
}
