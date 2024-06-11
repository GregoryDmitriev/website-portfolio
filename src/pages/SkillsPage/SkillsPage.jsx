import { useContext, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import styles from './skillsPage.module.scss'
import { Gears } from './Gears'
import { Icon } from '@/components/Icon'
import { ThemeContext } from '@/providers'

const SkillsPage = () => {
	const [theme] = useContext(ThemeContext)
	const styleTheme = theme === 'light' ? styles.light : styles.dark

	gsap.registerPlugin(ScrollTrigger)

	// const skillsRef = useRef(null)

	// useGSAP(() => {
	// 	gsap.from(skillsRef.current, {
	// 		opacity: 0,
	// 		x: -500,
	// 		duration: 3,
	// 		scrollTrigger: {
	// 			trigger: skillsRef.current,
	// 			start: '48% center',
	// 			end: 'bottom 10%',
	// 			markers: {
	// 				startColor: 'red',
	// 				endColor: 'red',
	// 			},
	// 		},
	// 	})
	// }, {scope: skillsRef.current})

	const skillsRef1 = useRef(null)
	const skillsRef2 = useRef(null)
	const skillsRef3 = useRef(null)

useGSAP(() => {
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: skillsRef1.current,
			start: 'center center',
			end: 'bottom 10%',
			markers: {
				startColor: 'red',
				endColor: 'red',
			},
		},
	})

	tl.from(skillsRef1.current, {
		opacity: 0,
		x: -500,
		duration: 5,
	})
		.from(
			skillsRef2.current,
			{
				opacity: 0,
				x: -500,
				duration: 3,
			},
			'-=1.5'
		)
		.from(
			skillsRef3.current,
			{
				opacity: 0,
				x: -500,
				duration: 2,
			},
			'-=1.5'
		)
}, [])

	return (
		<section id='skills' className={styles.skills}>
			<div className={styles.container}>

				<div className={`${styles.textContainer} ${styleTheme} ${styles.line1}`} ref={skillsRef1}>
				</div>

				<div className={`${styles.textContainer} ${styleTheme} ${styles.line2}`} ref={skillsRef2}>
				</div>

				<div className={`${styles.textContainer} ${styleTheme} ${styles.line3}`} ref={skillsRef3}>
				</div>

				<h2 className={`${styles.title} ${styleTheme}`}>SKILLS</h2>

				<Gears />
			</div>
		</section>
	)
}

export { SkillsPage }
