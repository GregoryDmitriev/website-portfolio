import { createRef, useContext, useEffect, useRef, useState } from 'react'
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
import { usePageEffects } from '@/hooks/usePageEffects'

gsap.registerPlugin(ScrollTrigger)

const MainPage = () => {
	const [theme] = useContext(ThemeContext)
	const styleTheme = theme === 'light' ? styles.light : styles.dark

	const sections = ['home', 'about', 'skills', 'projects', 'contact']
	const { windowWidth, sectionRefs } = usePageEffects(sections)

	return (
		<main
			className={`${styles.main} ${styleTheme}`}
			style={{ overflow: 'hidden' }}
		>
			{windowWidth >= 900 && <CustomCursor />}

			<section id='home' ref={sectionRefs.current[0]}>
				<HomePage />
			</section>

			<section id='about' ref={sectionRefs.current[1]}>
				<AboutPage />
			</section>

			<section id='skills' ref={sectionRefs.current[2]} >
				<SkillsPage />
			</section>
			<section
				id='projects'
				ref={sectionRefs.current[3]}
				
			>
				<ProjectsPage />
			</section>

			<section id='contact' ref={sectionRefs.current[4]}>
				<ContactPage />
			</section>
		</main>
	)
}

export { MainPage }
