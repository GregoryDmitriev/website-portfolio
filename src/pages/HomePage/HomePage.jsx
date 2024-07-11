import { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MdStarRate } from 'react-icons/md'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import styles from './homePage.module.scss'
import { ThemeContext } from '@/providers'
import { Icon } from '@/components/Icon'
import { NAV_LINKS } from '@/constants'

gsap.registerPlugin(ScrollTrigger)

const HomePage = () => {
	const [theme] = useContext(ThemeContext)
	const styleTheme = theme === 'light' ? styles.light : styles.dark

	const containerRef = useRef(null)
	const contentRef = useRef(null)

	useGSAP(() => {
		
	},[])


	return (
		<div className={styles.container} ref={containerRef}>
			<nav>
				<Link to={NAV_LINKS[3].to}>{NAV_LINKS[3].title}</Link>
				<Link to={NAV_LINKS[4].to}>{NAV_LINKS[4].title}</Link>
			</nav>

			<div className={`${styles.content} ${styleTheme}`} ref={contentRef}>
				<span className={styles.stars}>
					<MdStarRate />
					<MdStarRate />
					<MdStarRate />
				</span>
				<h1 className={styleTheme}>WANTED</h1>
				<p>by IT DEPARTMENT</p>
			</div>

			<Link className={styles.heroLink} to={NAV_LINKS[1].to}>
				<Icon id='hero-home' className={`${styles.heroHome} ${styleTheme}`} />
			</Link>

			<div className={`${styles.tablet} ${styleTheme}`}>
				<Link to={NAV_LINKS[1].to}>GREGORY DMITRIEV</Link>

				<span>Front-end developer</span>
			</div>
		</div>
	)
}

export { HomePage }
