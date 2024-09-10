import { createPortal } from 'react-dom'

import styles from './modal.module.scss'

const modalElement = document.getElementById('portal')

const Modal = ({ children, onClose }) => {
	const handleOverlayClick = e => {
		if (e.target === e.currentTarget) {
			onClose()
		}
	}
	return createPortal(
		<div className={styles.modal} onClick={handleOverlayClick}>
			{children}
		</div>,
		modalElement
	)
}

export { Modal }
