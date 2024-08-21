import { useContext, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import styles from './skillsPage.module.scss'
import { ThemeContext } from '@/providers'
import { Icon } from '@/components/Icon'

// gsap.registerPlugin(ScrollTrigger)
const SkillsPage = () => {
	const [theme] = useContext(ThemeContext)
	const styleTheme = theme === 'light' ? styles.light : styles.dark

	const titleRef = useRef(null)

	useGSAP(() => {}, [])

	return (
		<div className={styles.container}>
			<h2 className={`${styles.title} ${styleTheme}`} ref={titleRef}>
				SKILLS
			</h2>

			
		</div>
	)
}

export { SkillsPage }
