import { useContext, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

import styles from './projectsPage.module.scss'
import { ThemeContext } from '@/providers'
import { Icon } from '@/components/Icon'
import { PROJECTS } from '@/constants'

const ProjectsPage = () => {
	const [theme] = useContext(ThemeContext)
	const styleTheme = theme === 'light' ? styles.light : styles.dark

	gsap.registerPlugin(ScrollTrigger)

	const projectsContainerRef = useRef(null)
	const projectsRef = useRef(null)
	const titleRef = useRef(null)

	// useGSAP(
	// 	() => {
	// 		const tl = gsap.timeline({
	// 			scrollTrigger: {
	// 				trigger: projectsContainerRef.current,
	// 				start: '50% top',
	// 				end: 'bottom 80%',
	// 				scrub: 1,
	// 				markers: false,
	// 			},
	// 		})

	// 		tl.from(projectsContainerRef.current, {
	// 			opacity: 0,
	// 			y: -500,
	// 			duration: 2.5,
	// 			ease: 'circ.out',
	// 		})

	// 			.to(projectsRef.current, {
	// 				width: '100vw',
	// 				height: '100vh',
	// 				stagger: 0.2,
	// 				duration: 2,
	// 				delay: 2,
	// 			})

	// 			.to(titleRef.current, {
	// 				opacity: 0,
	// 				duration: 2,
	// 				delay: 2,
	// 			})
	// 	},
	// 	{ scope: projectsContainerRef.current }
	// )

	return (
		<div className={styles.container}>
			<Icon
				id='icon-gear-full'
				className={`${styles.gearFull} ${styleTheme}`}
			/>
			{/* 
				<div
					className={`${styles.projectsContainer} ${styleTheme}`}
					ref={projectsContainerRef}
				>
					<div
						className={`${styles.projectsItem} ${styleTheme}`}
						data-scroll
						data-scroll-speed='.02'
						ref={projectsRef}
					>
						{PROJECTS.map(project => (
							<div
								className={`${styles.projectsImg}  ${styleTheme}`}
								key={project.id}
							>
								<img src={project.img} alt='png' />
							</div>
						))}
					</div>
				</div> */}

			<h2 className={`${styles.title} ${styleTheme}`} ref={titleRef}>
				PROJECTS
			</h2>
		</div>
	)
}

export { ProjectsPage }
