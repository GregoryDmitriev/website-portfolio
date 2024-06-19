import { useContext, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import styles from './skillsPage.module.scss'
import { Gears } from './Gears'
import { ThemeContext } from '@/providers'

const SkillsPage = () => {
	const [theme] = useContext(ThemeContext)
	const styleTheme = theme === 'light' ? styles.light : styles.dark

	gsap.registerPlugin(ScrollTrigger)

	// const lineRef = useRef(null)
	// const titleRef = useRef(null)

	// useGSAP(() => {
	// 	const tl = gsap.timeline({
	// 		scrollTrigger: {
	// 			trigger: lineRef.current,
	// 			start: '50% 53%',
	// 			end: 'bottom 80%',
	// 			scrub: 1,
	// 			markers: false,
	// 		},
	// 	})

	// 	tl.from(lineRef.current, {
	// 		opacity: 0,
	// 		x: -500,
	// 		duration: 0.5,
	// 	})
	// 		.to(lineRef.current, {
	// 			height: '100vh',
	// 			duration: 0.5,
	// 		})
	// 		.to(titleRef.current, {
	// 			opacity: 0,
	// 			duration: 2,
	// 			delay: 2,
	// 		})
	// }, [])

	return (
		<section id='skills' className={styles.skills}>
			<div className={styles.container}>
				<div className={`${styles.line} ${styleTheme} `} 
				// ref={lineRef}
				></div>

				<h2 className={`${styles.title} ${styleTheme}`} 
				// ref={titleRef}
				>
					SKILLS
				</h2>

				<Gears />
			</div>
		</section>
	)
}

export { SkillsPage }
