import { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import styles from './mainPage.module.scss'
import {
	AboutPage,
	HomePage,
	ProjectsPage,
	SkillsPage,
	ContactPage,
} from '../index'
import { ThemeContext } from '../../providers/Theme'

const MainPage = () => {
	const [theme] = useContext(ThemeContext)

	const styleTheme = theme === 'light' ? styles.light : styles.dark

	// scroll to hash
	const { hash } = useLocation()

	useEffect(() => {
		if (hash) {
			const element = document.getElementById(hash.substring(1))
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}, [hash])

	return (
		<main className={`${styles.main} ${styleTheme} `}>
			<HomePage />
			<AboutPage />
			<SkillsPage />
			<ProjectsPage />
			<ContactPage />
		</main>
	)
}

export { MainPage }
