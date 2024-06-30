import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

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

gsap.registerPlugin(ScrollTrigger)

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

	const sections = ['home', 'about', 'skills', 'projects', 'contact']
	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + window.innerHeight / 2
			for (const section of sections) {
				const element = document.getElementById(section)
				if (
					element &&
					element.offsetTop <= scrollPosition &&
					element.offsetTop + element.offsetHeight > scrollPosition
				) {
					if (location.hash.substring(1) !== section) {
						history.replaceState(null, null, `#${section}`)
					}
				}
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<main className={`${styles.main} ${styleTheme}`}>
			{windowWidth >= 900 && <CustomCursor />}

			<div
				className={styles.content}
			>
				<section id='home'>
					<HomePage />
				</section>

				{/* <section id='about'>
					<AboutPage />
				</section>
				<section id='skills'>
					<SkillsPage />
				</section>
				<section id='projects'>
					<ProjectsPage />
				</section>
				<section id='contact'>
					<ContactPage />
				</section> */}
			</div>
		</main>
	)
}

export { MainPage }
