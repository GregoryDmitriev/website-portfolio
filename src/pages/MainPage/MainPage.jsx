import { useContext, useRef, useState, useEffect, lazy, Suspense } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import styles from './mainPage.module.scss'
// import {
// 	AboutPage,
// 	HomePage,
// 	ProjectsPage,
// 	SkillsPage,
// 	ContactPage,
// } from '../index'
import { ThemeContext } from '@/providers'
import { Burger, CustomCursor, Navigation } from '@/components'
import { usePageEffects } from '@/hooks/usePageEffects'

const HomePage = lazy(() => import('../HomePage/HomePage'))
const AboutPage = lazy(() => import('../AboutPage/AboutPage'))
const SkillsPage = lazy(() => import('../SkillsPage/SkillsPage'))
const ProjectsPage = lazy(() => import('../ProjectsPage/ProjectsPage'))
const ContactPage = lazy(() => import('../ContactPage/ContactPage'))

gsap.registerPlugin(ScrollTrigger)

const MainPage = () => {
	const [theme] = useContext(ThemeContext)
	const styleTheme = theme === 'light' ? styles.light : styles.dark

	const sections = ['home', 'about', 'skills', 'projects', 'contact']
	const { windowWidth, sectionRefs } = usePageEffects(sections)

	const ref = useRef()

	const [isMenuVisible, setIsMenuVisible] = useState(false)
	const [isHeaderFixed, setIsHeaderFixed] = useState(true)

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						const sectionId = entry.target.getAttribute('id')

						if (sectionId === 'home' || sectionId === 'about') {
							setIsHeaderFixed(true)
						} else {
							setIsHeaderFixed(false)
						}

						if (sectionId === 'home' || sectionId === 'about') {
							setIsMenuVisible(false)
						} else {
							setIsMenuVisible(true)
						}
					}
				})
			},
			{ threshold: 0.5 }
		)

		sectionRefs.current.forEach(ref => {
			if (ref.current) {
				observer.observe(ref.current)
			}
		})

		return () => {
			sectionRefs.current.forEach(ref => {
				if (ref.current) {
					observer.unobserve(ref.current)
				}
			})
		}
	}, [sectionRefs])

	
	return (
		<main className={`${styles.main} ${styleTheme}`}>
			{windowWidth >= 900 && <CustomCursor />}

			<header
				className={`${styles.header} ${styleTheme} ${
					isHeaderFixed ? styles.fixedHeader : ''
				}`}
			>
				<Navigation />
			</header>

			{isMenuVisible && <Burger isMenuOpen={isMenuVisible} />}

			<Suspense fallback={<div>Loading...</div>}>
				{sections.map((section, index) => (
					<section key={section} id={section} ref={sectionRefs.current[index]}>
						{index === 0 && <HomePage />}
						{index === 1 && <AboutPage />}
						{index === 2 && <SkillsPage />}
						{index === 3 && <ProjectsPage />}
						{index === 4 && <ContactPage />}
					</section>
				))}
			</Suspense>
		</main>
	)
}
export { MainPage }
