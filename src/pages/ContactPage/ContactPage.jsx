import { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { TfiClose } from 'react-icons/tfi'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import styles from './contactPage.module.scss'
import hero from '@/assets/images/hero.webp'
import { Icon } from '@/components/Icon'
import { ThemeContext } from '@/providers'
import { useScreenSizeClass } from '@/hooks/useScreenSizeClass '
import { Form, Modal } from '@/components'

gsap.registerPlugin(ScrollTrigger)
const ContactPage = () => {
	const [theme] = useContext(ThemeContext)
	const styleTheme = theme === 'light' ? styles.light : styles.dark

	const screenSizeClass = useScreenSizeClass(styles)

	const [isOpen, setIsOpen] = useState(false)

	const modalRef = useRef(null)
	const contentRef = useRef(null)
	const socialRef = useRef(null)

	const handleClick = () => {
		setIsOpen(!isOpen)
	}

	const adjustContentMargin = () => {
		if (socialRef.current && contentRef.current) {
			const socialHeight = socialRef.current.clientHeight
			gsap.to(contentRef.current, {
				marginBottom: socialHeight + 50,
				duration: 0.5,
			})
		}
	}

	useGSAP(() => {
		if (socialRef.current) {
			gsap.set(socialRef.current, { x: '-100%', opacity: 0 })
		}

		ScrollTrigger.create({
			trigger: contentRef.current,
			start: 'center center',
			end: 'center center',
			onEnter: () => {
				gsap.to(socialRef.current, {
					x: '0%',
					opacity: 1,
					duration: 0.5,
				})
			},
			onLeaveBack: () => {
				gsap.to(socialRef.current, {
					x: '-100%',
					opacity: 0,
					duration: 0.5,
				})
			},
		})

		window.addEventListener('resize', adjustContentMargin)
	}, [])

	return (
		<div className={styles.container}>
			<div ref={contentRef}>
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
									backgroundColor:
										theme === 'light' ? '#3d3d3d80' : '#f8f9fa80',
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

			<div className={`${styles.social} ${styleTheme} `} ref={socialRef}>
				<Link to={'https://t.me/greg_dmitriev'}>
					<Icon
						id='telegram'
						className={`${styles.socialIcon} ${styleTheme}`}
					/>
				</Link>

				<Link to={'https://www.linkedin.com/in/gregory-dmitriev/'}>
					<Icon
						id='linkedin'
						className={`${styles.socialIcon} ${styleTheme}`}
					/>
				</Link>

				<Link to={'https://github.com/GregoryDmitriev'}>
					<Icon id='github' className={`${styles.socialIcon} ${styleTheme}`} />
				</Link>
			</div>
		</div>
	)
}

export { ContactPage }
