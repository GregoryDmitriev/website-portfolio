import { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import styles from './homePage.module.scss'
import { ThemeContext } from '@/providers'
import { Icon } from '@/components/Icon'

gsap.registerPlugin(ScrollTrigger)

const HomePage = () => {
	const [theme] = useContext(ThemeContext)
	const styleTheme = theme === 'light' ? styles.light : styles.dark
	return (
		<div className={styles.container}>

			<Icon id='hero-home' className={`${styles.heroHome} ${styleTheme}`} />
		</div>
	)
}

export { HomePage }
