import { useContext, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

import styles from './projectsPage.module.scss'
import { ThemeContext } from '@/providers'
import { PROJECTS } from '@/constants'
import { Icon } from '@/components/Icon'

gsap.registerPlugin(ScrollTrigger)
const ProjectsPage = () => {
	const [theme] = useContext(ThemeContext)
	const styleTheme = theme === 'light' ? styles.light : styles.dark

	return (
		<div className={styles.container}>
			{/* <h2 className={`${styles.title} ${styleTheme} `}>PROJECTS</h2> */}

			<div className={styles.silhouetteContainer}>
				<Icon
					id='silhouette'
					className={`${styles.silhouette} ${styleTheme}`}
					aria-label='silhouette'
				/>
			</div>
		</div>
	)
}

export { ProjectsPage }
