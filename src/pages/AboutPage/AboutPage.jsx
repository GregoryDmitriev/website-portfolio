import { useContext, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import styles from './aboutPage.module.scss'
import { ThemeContext } from '@/providers'
import { Icon } from '@/components/Icon'
import img_1 from '@/assets/images/scribbleOne.webp'
import img_2 from '@/assets/images/scribbleTwo.webp'

gsap.registerPlugin(ScrollTrigger)

const AboutPage = () => {
	const [theme] = useContext(ThemeContext)
	const styleTheme = theme === 'light' ? styles.light : styles.dark

	return (
		<div className={styles.container} style={{ backgroundColor: '#a170794a' }}>
			ABOUT
		</div>
	)
}

export { AboutPage }
