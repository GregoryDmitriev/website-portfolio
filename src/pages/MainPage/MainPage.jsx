import { useContext, useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import styles from './mainPage.module.scss'
import {
	AboutPage,
	HomePage,
	ProjectsPage,
	SkillsPage,
	ContactPage,
} from '../index'
import { ThemeContext } from '@/providers'
import { Burger, CustomCursor } from '@/components'
import { usePageEffects } from '@/hooks/usePageEffects'

gsap.registerPlugin(ScrollTrigger)
const MainPage = () => {
	const [theme] = useContext(ThemeContext)
	const styleTheme = theme === 'light' ? styles.light : styles.dark

	const sections = ['home', 'about', 'skills', 'projects', 'contact']
	const { windowWidth, sectionRefs } = usePageEffects(sections)

	const menuRef = useRef(null)
	const [isMenuVisible, setIsMenuVisible] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						const sectionId = entry.target.getAttribute('id')
						if (sectionId === 'home') {
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

	useGSAP(() => {
		if (sectionRefs.current[0] && sectionRefs.current[1]) {
			gsap.fromTo(
				sectionRefs.current[1].current,
				{ opacity: 0, y: 50 },
				{
					opacity: 1,
					y: 0,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: sectionRefs.current[0].current,
						start: 'top 70%',
						end: 'bottom 50%',
						scrub: true,
					},
				}
			)
		}
	}, [sectionRefs])

	return (
		<main
			className={`${styles.main} ${styleTheme}`}
			style={{ overflow: 'hidden' }}
		>
			{windowWidth >= 900 && <CustomCursor />}

			{isMenuVisible && <Burger menuRef={menuRef} isMenuOpen={isMenuVisible} />}

			{sections.map((section, index) => (
				<section key={section} id={section} ref={sectionRefs.current[index]}>
					{index === 0 && <HomePage />}
					{index === 1 && <AboutPage />}
					{index === 2 && <SkillsPage />}
					{index === 3 && <ProjectsPage />}
					{index === 4 && <ContactPage />}
				</section>
			))}
		</main>
	)
}
export { MainPage }
