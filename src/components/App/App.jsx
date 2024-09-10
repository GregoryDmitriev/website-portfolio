import { Suspense, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '@/styles/locomotive-scroll.scss'
import Lenis from 'lenis'

import styles from './app.module.scss'

import { Settings } from '@/components'
import { ThemeProvider } from '@/providers'
import { MainPage } from '@/pages/MainPage'
import HomePage from '@/pages/HomePage/HomePage'
import AboutPage from '@/pages/AboutPage/AboutPage'
import SkillsPage from '@/pages/SkillsPage/SkillsPage'
import ProjectsPage from '@/pages/ProjectsPage/ProjectsPage'
import ContactPage from '@/pages/ContactPage/ContactPage'
// import {
// 	AboutPage,
// 	ContactPage,
// 	HomePage,
// 	MainPage,
// 	ProjectsPage,
// 	SkillsPage,
// } from '@/pages'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
	const lenis = new Lenis()

	useEffect(() => {
		const raf = time => {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	}, [lenis.raf])

	return (
		<ThemeProvider>
			<div className={styles.app}>
				<Settings />
				<Router>
					<Suspense fallback={<div>Loading...</div>}>
						<Routes>
							<Route path='/' element={<MainPage />}>
								<Route path='home' element={<HomePage />} />
								<Route path='about' element={<AboutPage />} />
								<Route path='skills' element={<SkillsPage />} />
								<Route path='projects' element={<ProjectsPage />} />
								<Route path='contact' element={<ContactPage />} />
							</Route>
						</Routes>
					</Suspense>
				</Router>
			</div>
		</ThemeProvider>
	)
}

export { App }
