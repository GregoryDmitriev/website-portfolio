import { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

import styles from './contactPage.module.scss'
import hero from '@/assets/images/hero.png'
import { Icon } from '@/components/Icon'
import { ThemeContext } from '@/providers'
import { NAV_LINKS } from '@/constants'

const ContactPage = () => {
	const [theme] = useContext(ThemeContext)
	const styleTheme = theme === 'light' ? styles.light : styles.dark

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

	return (
		<div className={styles.container}>
			<h3 className={styles.title}>Get in touch</h3>
			<div className={styles.columnContainer}>
				<div className={styles.leftColumn}></div>
				<div className={styles.rightColumn}>
					<Link to={NAV_LINKS[0].to}>
						<Icon
							id='hero-contact'
							className={`${styles.heroContact} ${styleTheme}`}
						/>

						<img src={hero} alt='hero.png' />
					</Link>
				</div>
			</div>
		</div>
	)
}

export { ContactPage }
