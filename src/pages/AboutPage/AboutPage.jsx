import { useContext, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import styles from './aboutPage.module.scss'
import { ThemeContext } from '@/providers'

gsap.registerPlugin(ScrollTrigger)

const AboutPage = () => {
	const [theme] = useContext(ThemeContext)
	const styleTheme = theme === 'light' ? styles.light : styles.dark

	return (
		<div className={`${styles.container} ${styleTheme} `}>
			<div className={`${styles.wrap} ${styleTheme} `}>
				<div>
					<p>
						Hello! I am a Front-end developer. I am currently learning React and
						JavaScript. I am passionate about creating beautiful and
						user-friendly websites.
					</p>
				</div>
				<div>
					<p>
						Hello! I am a Front-end developer. I am currently learning React and
						JavaScript. I am passionate about creating beautiful and
						user-friendly websites.
					</p>
				</div>
				<div>
					<p>
						Hello! I am a Front-end developer. I am currently learning React and
						JavaScript. I am passionate about creating beautiful and
						user-friendly websites.
					</p>
				</div>
				<div>
					<p>
						Hello! I am a Front-end developer. I am currently learning React and
						JavaScript. I am passionate about creating beautiful and
						user-friendly websites.
					</p>
				</div>
				<div>
					<p>
						Hello! I am a Front-end developer. I am currently learning React and
						JavaScript. I am passionate about creating beautiful and
						user-friendly websites.
					</p>
				</div>
			</div>
		</div>
	)
}

export  {AboutPage} 
