import { useContext, useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import styles from './homePage.module.scss'
import { ThemeContext } from '@/providers'
import { Icon } from '@/components/Icon'
import { Navigation } from '@/components'
import { useScreenSizeClass } from '@/hooks/useScreenSizeClass '

gsap.registerPlugin(ScrollTrigger)

const HomePage = () => {
	const [theme] = useContext(ThemeContext)
	const styleTheme = theme === 'light' ? styles.light : styles.dark

	const titleRef = useRef(null)

	const screenSizeClass = useScreenSizeClass(styles)

	useGSAP(() => {
		gsap.fromTo(
			titleRef.current,
			{ scale: 0 },
			{ scale: 1, duration: 2, ease: 'slow(.7, .7, false)' }
		)
	}, [])

	return (
		<div className={styles.container}>
			<Navigation />

			<div className={styles.heroContainer}>
				<div className={`${styles.heroBox} ${styleTheme} `}>
					<Icon
						id='hero'
						className={`${styles.heroItem} ${styleTheme} ${screenSizeClass}`}
						aria-label='hero'
					/>
				</div>
			</div>

			<div className={`${styles.titleContainer} ${styleTheme}`} ref={titleRef}>
				<div className={styles.titleText}>
					<h1>Gregory Dmitriev</h1>
					<span className={styleTheme}>Front-end developer</span>
				</div>
			</div>
		</div>
	)
}

export { HomePage }
