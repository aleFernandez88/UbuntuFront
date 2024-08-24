import React from 'react'
import ChatWindow from './ChatWindow'

const ChatBot = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
				backgroundColor: '#f5f5f5',
			}}
		>
			<ChatWindow />
		</div>
	)
}

export default ChatBot
