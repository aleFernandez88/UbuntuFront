import React, { useState, useRef, useEffect } from 'react'
import Message from './Message'
import Options from './Options'

const ChatWindow = () => {
	const [messages, setMessages] = useState([])
	const [currentLevel, setCurrentLevel] = useState('main')

	const messagesEndRef = useRef(null)

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
	}

	useEffect(() => {
		scrollToBottom()
	}, [messages])

	const mainOptions = [
		{ label: '¿Cómo está el clima hoy?', value: 'climaHoy' },
		{ label: '¿Lloverá mañana?', value: 'lloveraManana' },
		{ label: '¿Cuál es la temperatura actual?', value: 'temperaturaActual' },
	]

	const subOptions = {
		climaHoy: [
			{ label: '¿Qué tan fuerte es el viento?', value: 'viento' },
			{ label: '¿Está nublado?', value: 'nublado' },
		],
		lloveraManana: [
			{ label: '¿Qué probabilidad hay?', value: 'probabilidadLluvia' },
			{ label: '¿A qué hora podría llover?', value: 'horaLluvia' },
		],
		temperaturaActual: [
			{ label: '¿Hace calor o frío?', value: 'calorFrio' },
			{ label: '¿Cuál es la sensación térmica?', value: 'sensacionTermica' },
		],
	}

	const responses = {
		climaHoy: 'El clima está despejado y soleado.',
		lloveraManana: 'Hay un 50% de probabilidad de lluvia mañana.',
		temperaturaActual: 'La temperatura actual es de 25°C.',
		viento: 'El viento es leve, con ráfagas de 10 km/h.',
		nublado: 'No, el cielo está despejado.',
		probabilidadLluvia: 'Hay un 50% de probabilidad de lluvia.',
		horaLluvia: 'Podría llover por la tarde, alrededor de las 3 PM.',
		calorFrio: 'Hace un clima templado.',
		sensacionTermica: 'La sensación térmica es de 27°C.',
	}

	const handleSelectOption = option => {
		if (option.value === 'main') {
			setCurrentLevel('main')
			setMessages([])
		} else {
			setMessages([...messages, { text: option.label, isUser: true }])

			if (responses[option.value]) {
				setMessages(prevMessages => [
					...prevMessages,
					{ text: responses[option.value], isUser: false },
				])
			}

			if (subOptions[option.value]) {
				setCurrentLevel(option.value)
			} else {
				setCurrentLevel('main')
			}
		}
	}

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				height: '450px',
				border: 'none',
				borderRadius: '10px',
				padding: '10px',
			}}
		>
			<div
				style={{
					flex: 1,
					overflowY: 'auto',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				{messages.map((msg, index) => (
					<Message key={index} text={msg.text} isUser={msg.isUser} />
				))}
				<div ref={messagesEndRef} />
			</div>
			<Options
				options={
					currentLevel === 'main' ? mainOptions : subOptions[currentLevel]
				}
				onSelectOption={handleSelectOption}
			/>
		</div>
	)
}

export default ChatWindow
