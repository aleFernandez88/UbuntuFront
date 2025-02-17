import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '75%',
	maxWidth: '400px',
	bgcolor: 'background.paper',
	borderRadius: '10px',
	boxShadow: 24,
	p: 4,
	textAlign: 'center',
}

const iconStyle = {
	color: '#4CAF50',
	fontSize: '50px',
	marginBottom: '16px',
}

export const ModalGeneric = ({ titulo, mensaje, isOpen }) => {
	const [open, setOpen] = React.useState(isOpen)
	const autoCloseTime = 3000

	React.useEffect(() => {
		setOpen(isOpen)
	}, [isOpen])

	React.useEffect(() => {
		let tiempo
		if (isOpen && autoCloseTime) {
			tiempo = setTimeout(() => {
				setOpen(false)
			}, autoCloseTime)
		}
		return () => clearTimeout(tiempo)
	}, [isOpen])

	return (
		<Modal
			open={open}
			onClose={() => setOpen(false)}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Box sx={style}>
				<CheckCircleIcon sx={iconStyle} />
				<Typography id='modal-modal-title' variant='h6' component='h2'>
					{titulo}
				</Typography>
				<Typography
					id='modal-modal-description'
					sx={{ mt: 2, color: '#666', fontSize: '16px' }}
				>
					{mensaje}
				</Typography>
			</Box>
		</Modal>
	)
}
