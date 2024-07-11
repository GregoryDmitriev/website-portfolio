import { useContext, useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
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

	// Scroll to hash
	const { hash } = useLocation()
	const navigate = useNavigate()

	const handleHashChange = () => {
		if (hash) {
			const element = document.getElementById(hash.substring(1))
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}

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
					if (hash.substring(1) !== section) {
						// Проверяем текущий хэш
						navigate(`#${section}`)
					}
				}
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [navigate, sections, hash]) // Добавляем зависимость hash

	const containerRef = useRef(null)
	useGSAP(() => {
		const container = containerRef.current
		const sections = gsap.utils.toArray('section.horizontal')

		gsap.to(sections, {
			xPercent: -100 * (sections.length - 1),
			ease: 'none',
			scrollTrigger: {
				trigger: container,
				pin: true,
				scrub: 0.5,
				start: 'top top',
				end: () => `+=${container.scrollWidth - window.innerWidth}`,
				onRefresh: () => {
					handleHashChange()
					ScrollTrigger.update()
				},
			},
		})
	}, [])

	useEffect(() => {
		handleHashChange()
	}, [hash])

	return (
		<main
			className={`${styles.main} ${styleTheme}`}
			style={{ overflow: 'hidden' }}
		>
			{windowWidth >= 900 && <CustomCursor />}

			<div
				className={styles.container}
				ref={containerRef}
				style={{ display: 'flex', flexWrap: 'nowrap' }}
			>
				<section id='home' className='horizontal'>
					<HomePage />
				</section>

				<section id='about' className='horizontal'>
					<AboutPage />
				</section>
			</div>

			<section id='skills'>
				<SkillsPage />
			</section>

			<section id='projects'>
				<ProjectsPage />
			</section>
			<section id='contact'>
				<ContactPage />
			</section>
		</main>
	)
}

export { MainPage }