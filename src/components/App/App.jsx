import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

import styles from './app.module.scss'
import '@/styles/locomotive-scroll.scss'
import { Layout, Settings } from '../index'
import { MainPage } from '@/pages'
import { ThemeProvider } from '@/providers'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
	const lenis = new Lenis()

	useEffect(() => {
		function raf(time) {
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
					<Routes>
						<Route path='/' element={<Layout />}>
							<Route index element={<MainPage />} />
						</Route>
					</Routes>
				</Router>
			</div>
		</ThemeProvider>
	)
}

export { App }
