import { useContext } from 'react'

import styles from './aboutPage.module.scss'
import { ThemeContext } from '../../providers/index'

const AboutPage = () => {
	const [theme] = useContext(ThemeContext)

	const styleTheme = theme === 'light' ? styles.light : styles.dark

	return (
		<section id='about' className={`${styles.about} ${styleTheme}`}>
			<div className={styles.container}>
				<h1>About</h1>
				<p>My name is Gregory and I am a frontend developer.</p>
			</div>
		</section>
	)
}

export { AboutPage }
