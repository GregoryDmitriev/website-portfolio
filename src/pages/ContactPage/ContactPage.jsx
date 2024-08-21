import { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

import styles from './contactPage.module.scss'
import hero from '@/assets/images/hero.webp'
import { Icon } from '@/components/Icon'
import { ThemeContext } from '@/providers'
import { useScreenSizeClass } from '@/hooks/useScreenSizeClass '

const ContactPage = () => {
	const navigate = useNavigate()
	const [theme] = useContext(ThemeContext)
	const styleTheme = theme === 'light' ? styles.light : styles.dark
	const screenSizeClass = useScreenSizeClass(styles)

	return (
		<div className={styles.container}>
			<h3 className={styleTheme} onClick={() => console.log('clicked')}>
				Get in touch
			</h3>

			<div className={styles.heroContainer}>
				<Icon
					id='hero-contact'
					className={`${styles.heroContact} ${styleTheme} ${screenSizeClass}`}
				/>

				<img src={hero} className={screenSizeClass} alt='hero_picture' />
			</div>

			<button
				className={`${styles.buttonHome} ${styleTheme}`}
				onClick={() => navigate('/home')}
			>
				Home
			</button>
		</div>
	)
}

export { ContactPage }
