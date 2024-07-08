import { useContext, useRef } from 'react'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

import styles from './contactPage.module.scss'
import hero from '@/assets/images/hero.png'
import { Icon } from '@/components/Icon'
import { ThemeContext } from '@/providers'

const ContactPage = () => {
	const textRef = useRef(null)

	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: textRef.current,
				start: '50% 53%',
				end: 'bottom 80%',
				scrub: 1,
				markers: false,
			},
		})
	}, [])

	const [theme] = useContext(ThemeContext)
	const styleTheme = theme === 'light' ? styles.light : styles.dark

	return (
		<div className={styles.container}>
			<h3 className={styles.title}>Get in touch</h3>
			<div
				className={styles.columnContainer}
			>
				<div
					className={styles.leftColumn}
				>
					
				</div>
				<div
					className={styles.rightColumn}
				>
					<Icon id='hero-contact' className={`${styles.heroContact} ${styleTheme}`} />

					<img src={hero} alt="hero.png" />
				</div>
			</div>
		</div>
	)
}

export { ContactPage }
