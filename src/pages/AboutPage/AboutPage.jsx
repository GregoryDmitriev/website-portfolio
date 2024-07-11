import { useContext } from 'react'
import { Link } from 'react-router-dom'

import styles from './aboutPage.module.scss'
import { ThemeContext } from '@/providers'
import { NAV_LINKS } from '@/constants'

const AboutPage = () => {
	const [theme] = useContext(ThemeContext)
	const styleTheme = theme === 'light' ? styles.light : styles.dark

	return (
		<div className={styles.container}>
			<h2
				className={`${styles.title} ${styleTheme}`}
				style={{ marginTop: '5rem' }}
			>
				ABOUT
			</h2>
		</div>
	)
}

export { AboutPage }
