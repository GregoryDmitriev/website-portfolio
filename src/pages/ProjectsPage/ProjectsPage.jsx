import { useContext } from 'react'

import styles from './projectsPage.module.scss'
import { ThemeContext } from '@/providers'
import { Icon } from '@/components/Icon'

const ProjectsPage = () => {
	const [theme] = useContext(ThemeContext)

	const styleTheme = theme === 'light' ? styles.light : styles.dark

	return (
		<section id='projects' className={`${styles.projects} ${styleTheme}`}>
			<div className={styles.container}>
				<h1>Projects</h1>

				<Icon
					id='icon-gear-full'
					className={`${styles.gearFull} ${styleTheme}`}
				/>
			</div>
		</section>
	)
}

export { ProjectsPage }
