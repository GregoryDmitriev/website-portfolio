import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import styles from './mainPage.module.scss'
import {
	AboutPage,
	HomePage,
	ProjectsPage,
	SkillsPage,
	ContactPage,
} from '../index'
import { ThemeContext } from '@/providers'
import { CustomCursor } from '@/components'

const MainPage = () => {
	const [theme] = useContext(ThemeContext)
	const styleTheme = theme === 'light' ? styles.light : styles.dark

	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

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
		<main className={`${styles.main} ${styleTheme}`}>
			{windowWidth > 900 && <CustomCursor />}
			<HomePage />
			<AboutPage />
			<SkillsPage />
			<ProjectsPage />
			<ContactPage />
		</main>
	)
}

export { MainPage }
