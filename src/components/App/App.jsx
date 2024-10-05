import { useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '@/styles/locomotive-scroll.scss'
import Lenis from 'lenis'

import styles from './app.module.scss'

import { Settings } from '@/components'
import { ThemeProvider } from '@/providers'
import {
	AboutPage,
	ContactPage,
	HomePage,
	MainPage,
	ProjectsPage,
	SkillsPage,
} from '@/pages'
import { ProjectItem } from '@/pages/ProjectsPage/ProjectItem'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
	const lenis = useRef(new Lenis())

	useEffect(() => {
		const raf = time => {
			lenis.current.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	}, [])

	return (
		<ThemeProvider>
			<div className={styles.app}>
				<Settings />
				<Router>
					<Routes>
						<Route path='/' element={<MainPage />}>
							<Route path='home' element={<HomePage />} />
							<Route path='about' element={<AboutPage />} />
							<Route path='skills' element={<SkillsPage />} />
							<Route path='projects' element={<ProjectsPage />}/>
							<Route path='contact' element={<ContactPage />} />
						</Route>
					</Routes>
				</Router>
			</div>
		</ThemeProvider>
	)
}

export { App }
