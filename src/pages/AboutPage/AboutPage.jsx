import { useContext, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import styles from './aboutPage.module.scss'
import { ThemeContext } from '@/providers'

gsap.registerPlugin(ScrollTrigger)

const AboutPage = () => {
	const [theme] = useContext(ThemeContext)
	const styleTheme = theme === 'light' ? styles.light : styles.dark

	return <div className={`${styles.container} `}></div>
}

export { AboutPage }
