import { useContext, useRef} from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { TextPlugin } from 'gsap/TextPlugin'

import styles from './homePage.module.scss'
import { ThemeContext } from '@/providers'
import { Icon } from '@/components/Icon'
import { useScreenSizeClass } from '@/hooks/useScreenSizeClass '

gsap.registerPlugin(TextPlugin)

const HomePage = () => {
	const [theme] = useContext(ThemeContext)
	const styleTheme = theme === 'light' ? styles.light : styles.dark

	const titleRef = useRef(null)
	const spanRef = useRef(null)

	const screenSizeClass = useScreenSizeClass(styles)

	useGSAP(() => {
		gsap.fromTo(
			spanRef.current,
			{ scale: 0 },
			{ scale: 1, duration: 1, ease: 'slow(.7, .7, false)' }
		)

		gsap.to(spanRef.current, {
			duration: 4,
			delay: 2,
			text: {
				value: 'Front-end developer',
			},
		})
	}, [])

	return (
		<div className={styles.container}>
			<div className={styles.heroContainer}>
				<div className={`${styles.heroBox} ${styleTheme} `}>
					<Icon
						id='hero'
						className={`${styles.heroItem} ${styleTheme} ${screenSizeClass}`}
						aria-label='hero'
					/>
				</div>
			</div>

			<div className={styles.titleContainer} ref={titleRef}>
				<div className={styles.titleText}>
					<h1 id='title-home' className={styleTheme}>
						Gregory Dmitriev
					</h1>
					<span className={styleTheme} ref={spanRef}>
						Adaptive cross-browser layout
					</span>
				</div>
			</div>
		</div>
	)
}

export { HomePage }
