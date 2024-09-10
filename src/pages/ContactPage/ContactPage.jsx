import { useContext, useRef, useState } from 'react'
import { TfiClose } from 'react-icons/tfi'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

import styles from './contactPage.module.scss'
import hero from '@/assets/images/hero.webp'
import { Icon } from '@/components/Icon'
import { ThemeContext } from '@/providers'
import { useScreenSizeClass } from '@/hooks/useScreenSizeClass '
import { Form, Modal } from '@/components'

const ContactPage = () => {
	const [theme] = useContext(ThemeContext)
	const styleTheme = theme === 'light' ? styles.light : styles.dark

	const screenSizeClass = useScreenSizeClass(styles)

	const [isOpen, setIsOpen] = useState(false)

	const modalRef = useRef(null)

	const handleClick = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className={styles.container}>
			{isOpen && (
				<Modal onClose={() => setIsOpen(false)}>
					<div
						className={styles.modalWrapper}
						ref={modalRef}
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							width: '100%',
							minHeight: '100%',
							position: 'absolute',
							top: 0,
							left: 0,
						}}
					>
						<div
							className={styles.modalContent}
							style={{
								borderRadius: '1.5rem',
								padding: '2rem 1.5rem 1.5rem 1.5rem',
								transform: 'translateY(-3.125rem)',
								transition: 'opacity 0.5s ease-in-out',
								backgroundColor: theme === 'light' ? '#3d3d3d80' : '#f8f9fa80',
							}}
						>
							<TfiClose onClick={() => setIsOpen(!isOpen)} />

							<Form />
						</div>
					</div>
				</Modal>
			)}

			{!isOpen && (
				<button
					type='button'
					className={`${styles.openModalButton} ${styleTheme}`}
					onClick={handleClick}
					aria-label='open-modal'
				>
					<Icon
						id='title-contact'
						className={`${styles.title} ${styleTheme}`}
						aria-label='title-contact'
					/>
				</button>
			)}

			<div className={styles.heroContainer}>
				<Icon
					id='hero-contact'
					className={`${styles.heroContact} ${styleTheme} ${screenSizeClass}`}
				/>

				<img src={hero} className={screenSizeClass} alt='hero_picture' />
			</div>
		</div>
	)
}

export  default ContactPage 
