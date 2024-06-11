import { useContext } from 'react'

import styles from './aboutPage.module.scss'
import { ThemeContext } from '@/providers'


const AboutPage = () => {
	const [theme] = useContext(ThemeContext)

	const styleTheme = theme === 'light' ? styles.light : styles.dark

	return (
		<section id='about' className={`${styles.about} ${styleTheme}`}>
			<div className={styles.container}>
				<h2 className={`${styles.title} ${styleTheme}`}>ABOUT</h2>
			</div>
		</section>
	)
}

export { AboutPage }
