import { useContext, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import styles from './projectsPage.module.scss'
import { ThemeContext } from '@/providers'
import { Icon } from '@/components/Icon'

const ProjectsPage = () => {
	const [theme] = useContext(ThemeContext)
	const styleTheme = theme === 'light' ? styles.light : styles.dark

	gsap.registerPlugin(ScrollTrigger)

	const projectsRef = useRef(null)

	useGSAP(
		() => {
			gsap.from(projectsRef.current, {
				opacity: 0,
				y: -500,
				duration: 3,
				scrollTrigger: {
					trigger: projectsRef.current,
					start: '70% center',
					end: 'bottom 30%',
					markers: {
						startColor: 'red',
						endColor: 'red',
					},
				},
			})
		},
		{ scope: projectsRef.current }
	)

	return (
		<section id='projects' className={`${styles.projects} ${styleTheme}`}>
			<div className={styles.container}>
				<Icon
					id='icon-gear-full'
					className={`${styles.gearFull} ${styleTheme}`}
				/>

				<div
					className={`${styles.textContainer} ${styleTheme}`}
					ref={projectsRef}
				>
					<h2> ProjectsPage</h2>
				</div>
			</div>
		</section>
	)
}

export { ProjectsPage }
