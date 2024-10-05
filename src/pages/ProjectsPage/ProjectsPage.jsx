import { useContext, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import styles from './projectsPage.module.scss'
import { ThemeContext } from '@/providers'
import { Icon } from '@/components/Icon'
import { ProjectItem } from './ProjectItem'

gsap.registerPlugin(ScrollTrigger)
const ProjectsPage = () => {
	const [theme] = useContext(ThemeContext)
	const styleTheme = theme === 'light' ? styles.light : styles.dark

	const [isProjectsWindowOpen, setIsProjectsWindowOpen] = useState(false)
	const projectContainerRef = useRef(null)
	const navigate = useNavigate()

	const handleClick = () => {
		setIsProjectsWindowOpen(true)
		navigate('projects')
	}

	useGSAP(() => {
		if (isProjectsWindowOpen && projectContainerRef.current) {
			gsap.fromTo(
				projectContainerRef.current,
				{ scale: 0, opacity: 0 },
				{ scale: 1, opacity: 1, duration: 0.5, ease: 'slow(.7, .7, false)' }
			)
		}
	}, [isProjectsWindowOpen])


	useGSAP(() => {
		if (projectContainerRef.current) {
			const closeDotAnimation = () => {
				if (isProjectsWindowOpen && projectContainerRef.current) {
					gsap.to(projectContainerRef.current, {
						scale: 0,
						opacity: 0,
						duration: 0.5,
						ease: 'slow(.7, .7, false)',
						onComplete: () => {
							setIsProjectsWindowOpen(false)
						},
					})
				}
			}

			ScrollTrigger.create({
				trigger: '#skills',
				start: 'top 50%',
				end: '100% 80%',
				onEnterBack: closeDotAnimation,
			})

			ScrollTrigger.create({
				trigger: '#contact',
				start: 'top 50%',
				onEnter: closeDotAnimation,
			})
		}
	}, [isProjectsWindowOpen])

	return (
		<div className={styles.container}>
			{/* <span className={styleTheme}>click to view</span> */}

			{!isProjectsWindowOpen && (
				<>
					<Link
						to='projects'
						className={`${styles.title} ${styleTheme} `}
						onClick={handleClick}
					>
						PROJECTS
					</Link>
					<div className={styles.silhouetteContainer}>
						<Icon
							id='silhouette'
							className={`${styles.silhouette} ${styleTheme}`}
							aria-label='silhouette'
						/>
					</div>
				</>
			)}

			{isProjectsWindowOpen && (
				<div
					className={`${styles.projectContainer} ${styleTheme}`}
					ref={projectContainerRef}
				>
					<ProjectItem />
				</div>
			)}
		</div>
	)
}

export { ProjectsPage }
