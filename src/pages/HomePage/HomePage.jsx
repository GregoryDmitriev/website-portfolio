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
		gsap.fromTo(
			contentRef.current,
			{ x: '200%' },
			{ x: '-10%', duration: 5, ease: 'power3.out' }
		)
	}, [])

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
				<h2 className={styleTheme}>WANTED</h2>
				<p>by IT DEPARTMENT</p>
			</div>

			<Link className={styles.heroLink} to={NAV_LINKS[1].to}>
				<Icon id='hero' className={`${styles.hero} ${styleTheme}`} aria-label='hero' />
			</Link>

			<Icon id="city" className={styles.city} aria-label="city" />

			<div className={`${styles.title} ${styleTheme}`} ref={contentRef}>
				<Icon id='car' className={styles.car} aria-label='car' />

				<div className={styles.titleText}>
					<h1>GREGORY DMITRIEV</h1>
					<span>Front-end developer</span>
				</div>
			</div>
		</div>
	)
}

export { HomePage }
