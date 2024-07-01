import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PruebasMUI } from './components/pruebas/PruebasMUI'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<PruebasMUI />
		</>
	)
}

export default App
