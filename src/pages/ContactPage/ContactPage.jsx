import { useContext, useRef } from 'react'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

import styles from './contactPage.module.scss'
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
			<Icon id='ink-pen' className={`${styles.inkPen} ${styleTheme}`} />
			<h3 className={`${styles.contactText} ${styleTheme}`}>Get in touch</h3>
		</div>
	)
}

export { ContactPage }
